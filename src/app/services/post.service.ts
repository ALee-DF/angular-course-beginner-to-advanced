import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(new BadInput(error));
        }
        return throwError(new AppError(error));
      })
    );
  }

  updatePost(post) {
    return this.http.patch(`${this.url}/${post.id}`, { isRead: true });
  }

  deletePost(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      })
    );
  }
}
