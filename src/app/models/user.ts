import { Category } from "./category";

export interface User {
  username: string,
  email: string;
  password: string;
  categories: Category[];
}
