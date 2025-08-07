import { Injectable } from '@angular/core';
import { learning } from '../data/data';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private courses : Course = learning;


  constructor() { }

    getCourses() : Course {{
    return this.courses;
  }
}

}

