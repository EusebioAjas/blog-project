import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  comments!: Comment[];
  totalItems!: number;
  comment!: Comment;
  constructor(
    private commentService: CommentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getUserComments().subscribe((response) => {
      this.comments = response;
      this.totalItems = this.comments.length;
    });
  }

  delete(commentId: number) {
    this.commentService
      .destroyUserComments(commentId)
      .pipe(tap(() => this.router.navigate(['private/dashboard'])))
      .subscribe(
        (response) => this.getComments(),
        (error) => alert(error)
      );
  }

  update(commentId: number) {
    this.commentService.udpdateComment(commentId).subscribe(
      (response) => {
        alert(response);
      },
      (error) => alert(error)
    );
  }
}
