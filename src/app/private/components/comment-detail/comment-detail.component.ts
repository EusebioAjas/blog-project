import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css'],
})
export class CommentDetailComponent implements OnInit {
  comment!: Comment;
  constructor(
    private commentService: CommentService,
    private activedRoute: ActivatedRoute,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    const id = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.commentService.getComment(id).subscribe((response) => {
      this.comment = response;
    });
  }

  update() {
    const id = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.commentService.udpdateComment(id, this.comment.content)
    .pipe(
      tap(() => this.route.navigate(['private/dashboard']))
    ).subscribe((response) => {
      alert(response);
    });
  }
}
