export interface Comment {
  id: number;
  userId: number;
  movieId: number;
  title: string;
  content: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
}
