import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-movie-comment',
  templateUrl: './movie-comment.component.html',
  styleUrls: ['./movie-comment.component.css']
})
export class MovieCommentComponent implements OnInit {
  @Input() movieId!: number;
  comments!: Comment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getComments(this.movieId).then(
      (response) => ( this.comments = response),
      (error) => {
        alert('Error: ' + error.statusText);
      }
    );
  }

}
