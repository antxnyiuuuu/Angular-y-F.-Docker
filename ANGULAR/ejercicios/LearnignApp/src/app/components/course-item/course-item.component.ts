import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';
import { student } from '../../models/student';

@Component({
  selector: 'tr [course-item]',
  imports: [],
  templateUrl: './course-item.component.html',
})
export class CourseItemComponent {
  @Input() item! : student;
}
