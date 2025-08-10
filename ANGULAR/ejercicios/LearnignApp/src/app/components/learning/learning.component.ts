import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { LearningService } from '../../services/learning.service';
import { CardInformationComponent } from '../card-information/card-information.component';

@Component({
  selector: 'app-learning',
  imports: [CardInformationComponent],
  templateUrl: './learning.component.html',

})
export class LearningComponent implements OnInit {

  Course!: Course;

  constructor(private service : LearningService) { }
  ngOnInit(): void {
    this.Course = this.service.getCourses();
  }
}
