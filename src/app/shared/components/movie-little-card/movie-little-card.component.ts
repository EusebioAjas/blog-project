import { Component, Input, OnInit } from '@angular/core';
import { BASE_IMG_URL } from 'src/app/config/tmdb';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-little-card',
  templateUrl: './movie-little-card.component.html',
  styleUrls: ['./movie-little-card.component.css']
})
export class MovieLittleCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
