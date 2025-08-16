import { Component, Input } from '@angular/core';
import { local } from '../../models/local';
import { product } from '../../models/products';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [],
  templateUrl: './suma.component.html',

})
export class SumaComponent {

  @Input()  sumas! : product

}
