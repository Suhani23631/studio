import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/posts';
import { ArrowRight, CalendarDays, TagIcon } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        {post.imageUrl && (
          <Link href={`/posts/${post.slug}`} className="block aspect-[3/2] relative overflow-hidden rounded-t-lg mb-4">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={post.imageHint || "blog image"}
            />
          </Link>
        )}
        <CardTitle className="font-headline text-2xl leading-tight">
          <Link href={`/posts/${post.slug}`} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground mt-1 flex items-center">
          <CalendarDays className="h-3 w-3 mr-1.5" />
          {formatDate(post.date)} by {post.author}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <TagIcon className="h-4 w-4 mr-1 text-muted-foreground self-center" />
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-accent p-0 h-auto">
          <Link href={`/posts/${post.slug}`}>
            Read More <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
