"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Please enter your name."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    message: z.string().min(10, "Please enter a message."),
});

export async function handleContactInquiry(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            type: "error",
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check your input.",
        };
    }
    
    console.log("New Contact Inquiry:", validatedFields.data);

    return {
        type: "success",
        message: "Thank you for your inquiry! We will get back to you soon.",
    };
}
