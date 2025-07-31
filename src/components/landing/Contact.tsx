"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { handleContactInquiry } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MapPin, Building, Send, Share2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full text-lg py-6 bg-accent hover:bg-accent/90" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Inquiry
        </>
      )}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(handleContactInquiry, { type: 'initial', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const googleMapsUrl = "https://www.google.com/maps/place/Asilo+Girls+PG/@28.4784904,77.5058117,19z/data=!4m15!1m8!3m7!1s0x390cea6513624ebd:0xc472b07f2822a6df!2sBeta+I,+Greater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4797984!4d77.5060438!16s%2Fg%2F1tdd_qy6!3m5!1s0x390ceb5e6bcd9b89:0x9caf31c42bc35918!8m2!3d28.4781292!4d77.5061669!16s%2Fg%2F11xrfzs4zf?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D";

   useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
        className: "bg-green-100 text-green-800 border-green-300"
      });
      formRef.current?.reset();
    } else if (state.type === 'error' && state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Have questions, want to schedule a visit, or just say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="grid gap-10 items-start">
          <Card className="shadow-xl rounded-lg border-none bg-gray-50/70">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-gray-800">Send us a Message</CardTitle>
              <CardDescription className="text-gray-600 font-body">Fill out the form and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <form ref={formRef} action={formAction}>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-gray-700 font-semibold font-body">Full Name</Label>
                  <Input id="name" name="name" placeholder="e.g. Akansha Jha" required className="py-5"/>
                  {state.type === 'error' && state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-gray-700 font-semibold font-body">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="e.g. akanshajha@gmail.com" required className="py-5"/>
                  {state.type === 'error' && state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-gray-700 font-semibold font-body">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="e.g. +91 12345 67890" required className="py-5"/>
                   {state.type === 'error' && state.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-700 font-semibold font-body">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message, inquiry, or question..." required rows={4}/>
                  {state.type === 'error' && state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </CardContent>
            </form>
          </Card>
          <div id="contact-info" className="space-y-6">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-gray-800 mb-3">Our Information</h3>
              <p className="text-base font-body text-gray-600">You can also reach us through the following channels:</p>
            </div>
            <div className="space-y-4 text-base">
                <a href="tel:+918766360226" className="flex items-center gap-3 group transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">+91 87663 60226</span>
                </a>
                 <a href="tel:+919717512704" className="flex items-center gap-3 group transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">+91 97175 12704</span>
                </a>
                <a href="mailto:asilohostel@gmail.com" className="flex items-center gap-3 group transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 group-hover:text-primary font-medium font-body">asilohostel@gmail.com</span>
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 group-hover:text-primary font-medium font-body">
                        Asilo Girls PG, Beta 1, Greater Noida, Uttar Pradesh
                    </p>
                </a>
            </div>
             <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h4 className="font-headline text-xl font-semibold text-gray-800 mb-3">Let's Connect</h4>
                <p className="text-gray-600 mb-4 font-body">
                  We're active on social media. Follow us for the latest updates and a glimpse into life at Asilo.
                </p>
                <div className="flex flex-col gap-4">
                    <Button asChild className="flex-1 bg-green-500 text-white hover:bg-green-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                        <a href="https://wa.me/918766360226" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
