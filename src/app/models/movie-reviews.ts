import { Review } from "./review";

export interface MovieReviews {
  results: Review[];
  total_pages: number;
  total_results: number;
}
