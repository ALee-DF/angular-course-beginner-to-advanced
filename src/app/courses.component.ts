import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    // Messy two-way binding
    // template: `
    //     <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
    // `

    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    email = 'me@example.com';

    onKeyUp() {
        console.log(this.email);
    }
}