import type { Post } from '@/types';
import {format} from 'date-fns';

const posts: Post[] = [
  {
    id: '1',
    slug: 'exploring-the-alps',
    title: 'Exploring the Majestic Alps: A Journey to Remember',
    date: '2024-07-15T10:00:00.000Z',
    author: 'Alex Wanderer',
    content: `
      <p class="mb-4">The Alps, a stunning mountain range stretching across eight Alpine countries, offer some of the most breathtaking landscapes in the world. My recent journey took me through towering peaks, serene valleys, and charming alpine villages.</p>
      <img src="https://placehold.co/800x400.png" alt="Alpine Scenery" data-ai-hint="mountain landscape" class="rounded-lg shadow-md my-6 w-full object-cover aspect-video" />
      <h2 class="text-2xl font-headline mt-6 mb-3">First Impressions</h2>
      <p class="mb-4">From the moment I arrived, the sheer scale of the mountains was awe-inspiring. The crisp air, the sound of cowbells in the distance, and the vibrant green pastures painted a picture of tranquility.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">Hiking Trails and Adventures</h2>
      <p class="mb-4">I embarked on several hiking trails, each offering unique vistas. The <a href="#" class="text-accent hover:underline">Eagle Walk</a> in Austria was particularly challenging but rewarded with panoramic views that words can hardly describe. We also tried paragliding over Interlaken, Switzerland, which was an adrenaline rush like no other!</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        "The mountains are calling, and I must go." - John Muir
      </blockquote>
      <p>This trip was more than just a vacation; it was an immersion into nature's grandeur, a reminder of the raw beauty our planet holds.</p>
    `,
    excerpt: 'A personal account of a journey through the breathtaking landscapes of the European Alps, filled with adventure and scenic beauty.',
    tags: ['travel', 'alps', 'adventure', 'nature', 'hiking'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mountain peak'
  },
  {
    id: '2',
    slug: 'the-art-of-minimalist-living',
    title: 'The Art of Minimalist Living: Finding Joy in Less',
    date: '2024-06-28T14:30:00.000Z',
    author: 'Clara Simplicity',
    content: `
      <p class="mb-4">Minimalism is not about deprivation; it's about intentionality. It's about making room for more of what matters by letting go of what doesn't. This philosophy has profoundly changed my life, bringing clarity and peace.</p>
      <img src="https://placehold.co/800x400.png" alt="Minimalist Interior" data-ai-hint="minimalist interior" class="rounded-lg shadow-md my-6 w-full object-cover aspect-video" />
      <h2 class="text-2xl font-headline mt-6 mb-3">Decluttering Your Space</h2>
      <p class="mb-4">The first step for many is decluttering their physical space. This process can be overwhelming, but starting small, one drawer or one shelf at a time, makes it manageable. The key is to be honest about what you truly need and use.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">Benefits Beyond the Physical</h2>
      <p class="mb-4">The benefits of minimalism extend far beyond a tidy home. I've found it leads to less stress, more financial freedom, and a greater appreciation for experiences over possessions. It's a continuous journey, not a destination.</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Reduced stress and anxiety.</li>
        <li>More focus on personal growth and relationships.</li>
        <li>Financial savings and freedom.</li>
      </ul>
      <p>Embracing minimalism is about curating a life of purpose and joy.</p>
    `,
    excerpt: 'Discover the principles of minimalist living and how decluttering your life can lead to greater happiness and fulfillment.',
    tags: ['minimalism', 'lifestyle', 'simplicity', 'well-being'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'simple living'
  },
  {
    id: '3',
    slug: 'mastering-sourdough-baking',
    title: 'Mastering Sourdough Baking: A Beginner\'s Guide',
    date: '2024-05-10T09:15:00.000Z',
    author: 'Ben Kneader',
    content: `
      <p class="mb-4">Sourdough baking might seem daunting at first, but with a little patience and practice, anyone can bake delicious, crusty loaves at home. This guide will walk you through the basics of creating and maintaining a starter, and baking your first loaf.</p>
      <img src="https://placehold.co/800x400.png" alt="Sourdough Bread" data-ai-hint="sourdough bread" class="rounded-lg shadow-md my-6 w-full object-cover aspect-video" />
      <h2 class="text-2xl font-headline mt-6 mb-3">The Starter: Your Sourdough Heart</h2>
      <p class="mb-4">A healthy starter is crucial. It's a living culture of wild yeast and bacteria. Learn how to feed it, understand its cycles, and troubleshoot common issues.</p>
      <h3 class="text-xl font-headline mt-4 mb-2">Feeding Schedule:</h3>
      <p class="mb-4">Typically, a mature starter needs feeding every 12-24 hours if kept at room temperature, or weekly if refrigerated.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">The Baking Process</h2>
      <p class="mb-4">From mixing the dough, through bulk fermentation, shaping, and finally baking, each step plays a vital role. We'll cover techniques like stretch-and-folds and scoring.</p>
      <p>The satisfaction of pulling your own golden-brown sourdough loaf from the oven is unparalleled. Happy baking!</p>
    `,
    excerpt: 'A comprehensive guide for beginners looking to dive into the world of sourdough baking, from starter care to baking the perfect loaf.',
    tags: ['baking', 'sourdough', 'food', 'diy', 'kitchen'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'baking bread'
  },
];

export function getPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function searchPosts(query: string): Post[] {
  const lowerCaseQuery = query.toLowerCase();
  return getPosts().filter(post => 
    post.title.toLowerCase().includes(lowerCaseQuery) ||
    post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
}

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'MMMM d, yyyy');
}
