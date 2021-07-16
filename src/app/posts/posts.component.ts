import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // posts: any[]; doesn't work and results in a compilation error. Better to use interface instead.

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input:HTMLInputElement) {
    const post = {
      title: input.value
    };
    input.value = '';
    this.http.post(this.url, post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.http.patch(`${this.url}/${post.id}`, { isRead: true })
      .subscribe(response => {
        console.log(response);
      });
  }
}
