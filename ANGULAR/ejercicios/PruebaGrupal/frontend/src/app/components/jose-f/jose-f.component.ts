import { Component, Input } from '@angular/core';
import { JoseSuc } from '../../models/Jose';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jose-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jose-f.component.html',

})
export class JoseFComponent {
  @Input() Jose! : JoseSuc;
}
