import { Component } from '@angular/core';

@Component({
    selector: 'courses',

    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        
    `
})
export class CoursesComponent {
    onDivClicked() {
        console.log('Div was Clicked');
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('Button Was Clicked', $event);
    }
}