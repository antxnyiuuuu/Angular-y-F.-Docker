import { Component, Input } from '@angular/core';
import { MateoSuc } from '../../models/Mateo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mateo-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mateo-f.component.html',
})
export class MateoFComponent {
  @Input() Mateo!: MateoSuc;

}
