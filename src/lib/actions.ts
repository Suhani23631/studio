'use server';

import { z } from 'zod';
import { suggestTags as suggestTagsFlow } from '@/ai/flows/suggest-tags';
import type { SuggestTagsInput } from '@/ai/flows/suggest-tags';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Simulate sending an email
  console.log('Contact form submitted:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    message: 'Your message has been sent successfully! We will get back to you soon.',
    success: true,
  };
}


export type AiTagSuggestorState = {
  message: string | null;
  tags: string[] | null;
  success: boolean;
  isLoading: boolean;
};

export async function generateTagsAction(
  prevState: AiTagSuggestorState,
  formData: FormData
): Promise<AiTagSuggestorState> {
    const content = formData.get('content') as string;

    if (!content || content.trim().length < 20) {
        return {
            message: 'Content is too short. Please provide at least 20 characters.',
            tags: null,
            success: false,
            isLoading: false,
        };
    }

    try {
        const input: SuggestTagsInput = { blogPostContent: content };
        const result = await suggestTagsFlow(input);
        
        if (result && result.tags) {
            return {
                message: 'Tags suggested successfully!',
                tags: result.tags,
                success: true,
                isLoading: false,
            };
        } else {
            return {
                message: 'AI could not suggest tags for this content.',
                tags: null,
                success: false,
                isLoading: false,
            };
        }
    } catch (error) {
        console.error('Error suggesting tags:', error);
        let errorMessage = 'An unexpected error occurred while suggesting tags.';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return {
            message: errorMessage,
            tags: null,
            success: false,
            isLoading: false,
        };
    }
}
