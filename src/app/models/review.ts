export interface Review {
  author: string;
  author_details: Array<{
    name: string;
    username: string;
    avatar_path?: string;
    rating?: number;
  }>;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
