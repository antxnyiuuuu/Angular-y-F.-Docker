import { Component, Input, input } from '@angular/core';
import { Course } from '../../models/course';
import { CourseItemComponent } from '../course-item/course-item.component';

@Component({
  selector: 'card-information',
  imports: [CourseItemComponent],
  templateUrl: './card-information.component.html',
})
export class CardInformationComponent {
  @Input()Course! : Course 
}
