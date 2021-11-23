import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-most-ranked-movies',
  templateUrl: './most-ranked-movies.component.html',
  styleUrls: ['./most-ranked-movies.component.css']
})
export class MostRankedMoviesComponent implements OnInit {
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
