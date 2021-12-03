import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../../models/movies-response';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-latest-ranked-movies',
  templateUrl: './latest-ranked-movies.component.html',
  styleUrls: ['./latest-ranked-movies.component.css'],
})
export class LatestRankedMoviesComponent implements OnInit {
  movies!: Movie[];
  page: number = 1;
  totalPages!: number;

  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getUpcomingMovies(this.page);
  }

  getUpcomingMovies(pageNumber: number) {
    this.tmdbService.getUpcoming(pageNumber).subscribe(
      (response) => {
        this.movies = response.results;
        this.totalPages = response.total_pages
      },
      (error) => {
        alert('Error:' + error.statusText);
      }
    );

  }
}
