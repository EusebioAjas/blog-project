export interface Comment {
  id: number;
  userId: number;
  movieId: number;
  content: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}
