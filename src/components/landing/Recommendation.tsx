"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { getRecommendationsAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Get Recommendation
    </Button>
  );
}

export default function Recommendation() {
  const [state, formAction] = useFormState(getRecommendationsAction, { type: "initial" });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.type === 'error' && state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="recommendation" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Find Your Perfect Fit</CardTitle>
            <CardDescription>
              Tell us a bit about yourself, and our AI will recommend the best room and amenities for your needs.
            </CardDescription>
          </CardHeader>
          <form ref={formRef} action={formAction}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lifestyle">Describe your lifestyle (hobbies, study habits, social life)</Label>
                <Textarea id="lifestyle" name="lifestyle" placeholder="e.g., I'm a quiet person who enjoys reading, need a peaceful environment for late-night studies, and occasionally hang out with friends." required />
                {state.type === 'error' && state.errors?.lifestyle && (
                  <p className="text-sm text-destructive">{state.errors.lifestyle[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">What is your field of study?</Label>
                <Input id="fieldOfStudy" name="fieldOfStudy" placeholder="e.g., Computer Science, Fine Arts, Business Administration" required />
                {state.type === 'error' && state.errors?.fieldOfStudy && (
                  <p className="text-sm text-destructive">{state.errors.fieldOfStudy[0]}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
          {state.type === 'success' && state.data && (
            <div className="p-6 pt-0">
                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Your Personal Recommendation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-bold">Recommended Room Type:</h4>
                            <p>{state.data.roomRecommendation}</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Recommended Amenities:</h4>
                            <p>{state.data.amenitiesRecommendation}</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Reasoning:</h4>
                            <p className="text-muted-foreground">{state.data.reasoning}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
