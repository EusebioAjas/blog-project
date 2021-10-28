import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviewsComponent implements OnInit {
  movies!: Movie[];
  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.tmdbService
      .getPopular()
      .subscribe((movies) => (this.movies = movies.results));
  }
}
