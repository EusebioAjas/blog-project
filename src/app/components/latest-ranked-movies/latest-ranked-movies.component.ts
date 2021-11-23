import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-latest-ranked-movies',
  templateUrl: './latest-ranked-movies.component.html',
  styleUrls: ['./latest-ranked-movies.component.css']
})
export class LatestRankedMoviesComponent implements OnInit {
  movies!: Movie[];
  
  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.tmdbService.getPopular().then(
      (response) => (this.movies = response.results),
      (error) => {
        alert('Error:' + error.statusText);
      }
    );
  }
}
