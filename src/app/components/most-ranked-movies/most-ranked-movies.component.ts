import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-most-ranked-movies',
  templateUrl: './most-ranked-movies.component.html',
  styleUrls: ['./most-ranked-movies.component.css'],
})
export class MostRankedMoviesComponent implements OnInit {
  movies!: Movie[];
  page: number = 1;
  totalPages!: number;

  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getTopRatedMovies(this.page);
  }

  getTopRatedMovies(pageNumber: number): void {
    this.tmdbService.getTopRated(pageNumber).subscribe(
      (response) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
      },
      (error) => {
        alert('Error:' + error.statusText);
      }
    );
  }
}
