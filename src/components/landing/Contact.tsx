"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { handleContactInquiry } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Inquiry
    </Button>
  );
}

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
)


export default function Contact() {
  const [state, formAction] = useFormState(handleContactInquiry, { type: 'initial' });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

   useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.type === 'error' && state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);
  
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to schedule a visit? We'd love to hear from you.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <form ref={formRef} action={formAction}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" required/>
                  {state.type === 'error' && state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required/>
                  {state.type === 'error' && state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required/>
                   {state.type === 'error' && state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message or inquiry" required/>
                  {state.type === 'error' && state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </CardContent>
            </form>
          </Card>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4 text-lg">
                <div className="flex flex-col gap-2">
                    <a href="tel:+918766360226" className="flex items-center gap-4 group">
                        <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">+91 87663 60226</span>
                    </a>
                     <a href="tel:+919717512704" className="flex items-center gap-4 group">
                        <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">+91 97175 12704</span>
                    </a>
                </div>
                <a href="mailto:asilohostel@gmail.com" className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">asilohostel@gmail.com</span>
                </a>
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                        Asilo Girls PG, BETA - 1, Greater Noida
                    </p>
                </div>
            </div>
             <div className="flex space-x-4">
                 <Button variant="outline" size="icon" asChild>
                    <a href="https://wa.me/918766360226" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
                </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
