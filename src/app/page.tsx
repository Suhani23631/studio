import { getPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/PostCard';
import { SearchBar } from '@/components/shared/SearchBar';

export default async function HomePage() {
  const posts = getPosts();

  return (
    <div className="animate-fadeIn">
      <SearchBar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-headline font-bold mb-12 text-center text-primary">
          Latest Chronicles
        </h1>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No posts yet. Check back soon!</p>
        )}
      </main>
    </div>
  );
}
