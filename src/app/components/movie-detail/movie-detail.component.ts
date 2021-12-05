import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CommentRequest } from 'src/app/models/comment-request';
import { CommentService } from 'src/app/services/comment.service';
import { Movie } from '../../models/movie';
import { TMDBDataService } from '../../services/tmdb-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie;
  comment!: string;
  constructor(
    private route: ActivatedRoute,
    private movieService: TMDBDataService,
    private commentService: CommentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).then(
      (response) => (this.movie = response),
      (error) => {
        alert('Error: ' + error.statusText);
      }
    );
  }

  create() {
    this.commentService.createComment({
      movieId: this.movie?.id + '',
      title: this.movie?.title,
      content: this.comment,
    }).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
