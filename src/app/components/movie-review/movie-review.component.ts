import { Component, Input, OnInit } from '@angular/core';
import { MovieReviews } from 'src/app/models/movie-reviews';
import { Review } from 'src/app/models/review';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css'],
})
export class MovieReviewComponent implements OnInit {
  @Input() movieId!: number;
  reviews!: Review[];
  page: number = 1;
  totalItems!: number;
  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.tmdbService.getReviews(this.movieId).then(
      (response) => {
        this.reviews = response.results;
        this.totalItems = response.total_results;
      },
      (error) => {
        alert('Error: ' + error.statusText);
      }
    );
  }
}
