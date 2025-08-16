import { Component, OnInit } from '@angular/core';
import { JoseFComponent } from '../jose-f/jose-f.component';
import { KevinFComponent } from '../kevin-f/kevin-f.component';
import { MariaFComponent } from '../maria-f/maria-f.component';
import { MateoFComponent } from '../mateo-f/mateo-f.component';
import { SofiaFComponent } from '../sofia-f/sofia-f.component';
import { local } from '../../models/local';
import { LearningService } from '../../services/services.fashions';
@Component({
  selector: 'app-information',
  standalone: true,
  imports: [JoseFComponent, KevinFComponent,MariaFComponent,MateoFComponent,SofiaFComponent],
  templateUrl: './information.component.html',
})
export class InformationComponent implements OnInit {
  Local!: local;
  constructor(private service : LearningService ) { }
  ngOnInit(): void {
    this.Local = this.service.getCourses();
  }
}