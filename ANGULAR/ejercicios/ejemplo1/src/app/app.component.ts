import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProductoComponent } from './components/producto/producto.component';

@Component({
  selector: 'root',
  imports: [RouterOutlet , UserComponent, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1';
}
