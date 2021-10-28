import { Component, Input, OnInit } from '@angular/core';
import { BASE_IMG_URL } from 'src/app/config/tmdb';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getFullImgPath(posterPath: string) {
    return BASE_IMG_URL + posterPath.trim();
  }

  parseRating(rate: number) {
    return (Math.floor(rate) * 5) / 10;
  }
}
