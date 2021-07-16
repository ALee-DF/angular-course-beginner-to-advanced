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
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  createPost(input:HTMLInputElement) {
    const post = {
      title: input.value
    };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setERrors(error.originalError);
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);  
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);  
          }
        });
  }
}
