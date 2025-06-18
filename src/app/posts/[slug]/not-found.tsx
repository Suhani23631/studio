import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-4xl font-headline font-bold mb-2">Post Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn't find the post you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  );
}
