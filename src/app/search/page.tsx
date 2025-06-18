'use client'; // For Suspense and useSearchParams

import { useSearchParams } from 'next/navigation';
import { searchPosts, getPosts } from '@/lib/posts'; // Assuming getPosts is synchronous, or adapt for async
import { PostCard } from '@/components/blog/PostCard';
import { SearchBar } from '@/components/shared/SearchBar';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // In a real app, this might be an API call or an async function.
  // For this example, we use synchronous functions from lib/posts.
  const allPosts = getPosts(); // Get all posts to filter
  const results = query ? searchPosts(query) : [];


  return (
    <>
      <h1 className="text-3xl font-headline font-bold mb-8 text-center text-primary">
        Search Results {query && `for "${query}"`}
      </h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          {query ? `No posts found matching your search for "${query}".` : 'Please enter a search term.'}
        </p>
      )}
    </>
  );
}


export default function SearchPage() {
  return (
    <div className="animate-fadeIn">
      <SearchBar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<div className="flex justify-center items-center h-64"><LoadingSpinner size={48}/></div>}>
          <SearchResults />
        </Suspense>
      </main>
    </div>
  );
}
