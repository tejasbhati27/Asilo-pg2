'use server';

/**
 * @fileOverview A personalized recommendation AI agent for student rooms and amenities.
 *
 * - getPersonalizedRecommendations - A function that generates personalized recommendations.
 * - PersonalizedRecommendationInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationInputSchema = z.object({
  lifestyle: z
    .string()
    .describe(
      'The lifestyle of the student, including hobbies, interests, and daily routines.'
    ),
  fieldOfStudy: z.string().describe('The field of study of the student.'),
});
export type PersonalizedRecommendationInput = z.infer<
  typeof PersonalizedRecommendationInputSchema
>;

const PersonalizedRecommendationOutputSchema = z.object({
  roomRecommendation: z
    .string()
    .describe('The recommended room type for the student.'),
  amenitiesRecommendation: z
    .string()
    .describe('The recommended amenities for the student.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the recommendations.'),
});
export type PersonalizedRecommendationOutput = z.infer<
  typeof PersonalizedRecommendationOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationInput
): Promise<PersonalizedRecommendationOutput> {
  return personalizedRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationPrompt',
  input: {schema: PersonalizedRecommendationInputSchema},
  output: {schema: PersonalizedRecommendationOutputSchema},
  prompt: `You are an expert recommendation system for student housing.

You will use the provided information about the student's lifestyle and field of study to recommend the most suitable room type and amenities.

Lifestyle: {{{lifestyle}}}
Field of Study: {{{fieldOfStudy}}}

Consider the following room types: Single, Double, Triple Occupancy.
Consider the following amenities: 24/7 Security, Fully Furnished Rooms, High-Speed Wi-Fi, Homely Meals, Laundry Service, Proximity to Major Colleges.

Explain your reasoning for each recommendation.
`,
});

const personalizedRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationFlow',
    inputSchema: PersonalizedRecommendationInputSchema,
    outputSchema: PersonalizedRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
