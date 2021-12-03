import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TMDBDataService } from 'src/app/services/tmdb-data.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  searchTerm: string = '';
  movies!: Movie[];
  totalItems!: number;
  page: number = 1;

  constructor(private tmdbService: TMDBDataService) {}

  ngOnInit(): void {}

  search(): void {
    this.tmdbService.searchMovie(this.searchTerm, this.page).then((response) => {
      this.movies = response.results;
      this.totalItems = response.total_pages;
    });
  }
}
