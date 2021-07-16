import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  // posts: any[]; doesn't work and results in a compilation error. Better to use interface instead.

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts );
  }

  createPost(input:HTMLInputElement) {
    const post = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setERrors(error.originalError);
          }
          else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        },
        error => {
          throw error;
        });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          }
          else {
            throw error;
          }
        });
  }
}
