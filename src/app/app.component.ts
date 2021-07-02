import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-beginner-to-advanced';

  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged() {
    console.log('Favorite Changed');
  }
 }
