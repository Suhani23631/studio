import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpenText, Home, Mail, Sparkles } from 'lucide-react';

export function MainHeader() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-accent transition-colors" aria-label="Chronicler Home">
            Chronicler
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" asChild className="text-sm sm:text-base">
              <Link href="/" aria-label="Home">
                <Home className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-sm sm:text-base">
              <Link href="/contact" aria-label="Contact">
                <Mail className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Contact</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-sm sm:text-base">
              <Link href="/suggest-tags-demo" aria-label="Suggest Tags AI Demo">
                <Sparkles className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">AI Tags</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
