import { Component, Input } from '@angular/core';
import { KevinSuc } from '../../models/Kevin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kevin-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kevin-f.component.html',

})
export class KevinFComponent {
  @Input() Kevin! : KevinSuc;
}
