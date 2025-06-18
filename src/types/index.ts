export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO string format e.g. "2023-10-26T10:00:00.000Z"
  author: string;
  content: string; // HTML content
  excerpt: string;
  tags: string[];
  imageUrl?: string;
  imageHint?: string; // For data-ai-hint
}
