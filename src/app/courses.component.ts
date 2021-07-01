import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

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
    courses;

    // Dependency Injection: Injecting or providing dependencies of a class into its constructor
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    // Logic for calling and HTTP service

}