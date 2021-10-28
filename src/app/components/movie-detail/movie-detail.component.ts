import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { TMDBDataService } from '../../services/tmdb-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: TMDBDataService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

  goBack(): void{
    this.location.back();
  }
}
