import { Injectable } from '@angular/core';
import { local } from '../models/local';
import { fashionData } from '../data/fashion-data';



@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private local : local = fashionData;

  constructor() { }
    getCourses() : local {{
    return this.local;
  }
}

}

