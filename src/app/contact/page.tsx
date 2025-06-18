import { ContactForm } from '@/components/contact/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Chronicler',
  description: 'Get in touch with the team at Chronicler.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          Have questions, feedback, or just want to say hello? Reach out to us using the form below.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
