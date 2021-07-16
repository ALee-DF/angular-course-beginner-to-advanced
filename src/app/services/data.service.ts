import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url).pipe(
        // Completely Unnecessary since we receive an array of JavaScript objects already. No fixing needed here or for the methods below.
        // map((response: any) => {
        //     console.log(response);
        //     return response.json();
        // }),
        catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, resource).pipe(
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(`${this.url}/${resource.id}`, { isRead: true }).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    return throwError(new AppError(error));
  }
}
