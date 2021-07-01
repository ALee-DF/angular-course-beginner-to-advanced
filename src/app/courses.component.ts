import { Component } from '@angular/core';

@Component({
    selector: 'courses',

    // Method 1
    // template: `
    //     <input (keyup)="onKeyUp($event)" />
    // `

    // Method 2
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    // Method 1
    // onKeyUp($event) {
    //     if($event.keyCode === 13) {
    //         console.log('ENTER was Pressed.')
    //     }
    // }

    // Method 2 with Event Filtering
    onKeyUp() {
        console.log('ENTER was Pressed.')
    }
}