import { Category } from "./category";

export interface User {
  email: string;
  password: string;
  username?: string,
  categories?: Category[];
}
