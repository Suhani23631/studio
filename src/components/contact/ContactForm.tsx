'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
        icon: state.success ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <AlertCircle className="h-5 w-5 text-red-500" />,
      });
    }
  }, [state, toast]);


  return (
    <Card className="w-full max-w-xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Get in Touch</CardTitle>
        <CardDescription>We'd love to hear from you. Fill out the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="font-medium">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="mt-1"
              aria-describedby="name-error"
            />
            {state.errors?.name && (
              <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="font-medium">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="mt-1"
              aria-describedby="email-error"
            />
            {state.errors?.email && (
              <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message" className="font-medium">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              required
              rows={5}
              className="mt-1"
              aria-describedby="message-error"
            />
            {state.errors?.message && (
              <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>
            )}
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
