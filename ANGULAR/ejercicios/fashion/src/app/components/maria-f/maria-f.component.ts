import { Component, Input } from '@angular/core';
import { MariaSuc } from '../../models/Maria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maria-f ',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maria-f.component.html',
})
export class MariaFComponent {
  @Input() Maria! : MariaSuc;
}
