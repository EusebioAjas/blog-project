import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  movies!: Movie[];
  selectedMovie?: Movie;

  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.tmdbService
      .getPopular()
      .subscribe((movies) => (this.movies = movies.results.slice(0, 4)));
  }

  parseRating(rate: number) {
    return (Math.floor(rate) * 5) / 10;
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
