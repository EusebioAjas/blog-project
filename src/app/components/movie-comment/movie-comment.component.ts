import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-movie-comment',
  templateUrl: './movie-comment.component.html',
  styleUrls: ['./movie-comment.component.css'],
})
export class MovieCommentComponent implements OnInit {
  @Input() movieId!: number;
  comments!: Comment[];
  page = 1;
  totalItems!: number;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getComments(this.movieId).subscribe(
      (response) => {
        this.comments = response;
        this.totalItems = this.comments.length;
      },
      (error) => {
        alert('Error: ' + error.statusText);
      }
    );
  }
}
