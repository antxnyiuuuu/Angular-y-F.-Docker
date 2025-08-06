import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
})
export class ProductoComponent {

  id : number = 100;
  name : string = "Papas Fritas"
  price : number = 0.40;

}
