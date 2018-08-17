import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  course = new Course(1, 'Angular 2', '4 days');
  submitted = false;

  onSubmit() { this.submitted = true; }

}