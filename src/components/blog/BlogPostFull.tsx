import type { Post } from '@/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/posts';
import { CalendarDays, User, Tag as TagIcon } from 'lucide-react';

interface BlogPostFullProps {
  post: Post;
}

export function BlogPostFull({ post }: BlogPostFullProps) {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">{post.title}</h1>
        <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-center items-center gap-2 sm:gap-4">
          <span className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            {formatDate(post.date)}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1.5" />
            By {post.author}
          </span>
        </div>
      </header>

      {post.imageUrl && (
         <div className="relative aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              data-ai-hint={post.imageHint || "blog header image"}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none font-body text-foreground leading-relaxed selection:bg-primary selection:text-primary-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && post.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-headline mb-4 flex items-center">
            <TagIcon className="h-5 w-5 mr-2 text-accent" />
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-sm px-3 py-1 bg-accent text-accent-foreground hover:bg-accent/90">
                {tag}
              </Badge>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
