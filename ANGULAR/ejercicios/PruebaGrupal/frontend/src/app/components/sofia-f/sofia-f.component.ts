import { Component, Input } from '@angular/core';
import { SofiaSuc } from '../../models/Sofia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sofia-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sofia-f.component.html',

})
export class SofiaFComponent {
  @Input() Sofia!: SofiaSuc;
}
