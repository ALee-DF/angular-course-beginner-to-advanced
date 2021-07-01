import { Component } from '@angular/core';

@Component({
    selector: 'courses',

    // Whenever you are using a directive that modifies the structure of the DOM by adding or removing an element,
    // you need to prefix "ngFor" with an asterisks (*)
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"]

    getTitle() {
        return this.title;
    }
}