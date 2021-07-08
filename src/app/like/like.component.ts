import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isSelected: boolean;
  @Input('likesCount') count: number;

  onClick() {
    this.isSelected = !this.isSelected;
    this.count += this.isSelected ? 1 : -1;
  }
}
