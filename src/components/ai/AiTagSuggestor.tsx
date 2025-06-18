'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTagsAction, type AiTagSuggestorState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Sparkles, TagIcon } from 'lucide-react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

const initialState: AiTagSuggestorState = {
  message: null,
  tags: null,
  success: false,
  isLoading: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <LoadingSpinner className="mr-2 h-4 w-4" /> Suggesting...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Suggest Tags
        </>
      )}
    </Button>
  );
}

export function AiTagSuggestor() {
  const [state, formAction] = useFormState(generateTagsAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.isLoading) { // Only toast when not loading, to avoid premature toasts
      toast({
        title: state.success ? 'AI Suggestion' : 'AI Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
        icon: state.success ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <AlertCircle className="h-5 w-5 text-red-500" />,
      });
    }
  }, [state.message, state.success, state.isLoading, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center">
          <Sparkles className="h-7 w-7 mr-2 text-accent" />
          AI Tag Suggester
        </CardTitle>
        <CardDescription>
          Paste your blog post content below and let AI suggest relevant tags to improve SEO and discoverability.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="content" className="font-medium text-lg">Blog Post Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Start writing or paste your blog post content here..."
              required
              rows={10}
              className="mt-2 text-base"
              minLength={20}
              aria-describedby="content-error"
            />
            {state.message && !state.success && !state.isLoading && (
                 <p id="content-error" className="text-sm text-destructive mt-1">{state.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
      {state.tags && state.tags.length > 0 && (
        <CardFooter className="flex-col items-start gap-4 border-t pt-6">
          <h3 className="text-xl font-headline flex items-center">
            <TagIcon className="h-5 w-5 mr-2 text-primary" />
            Suggested Tags:
          </h3>
          <div className="flex flex-wrap gap-2">
            {state.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
