import { Component, OnInit } from '@angular/core';
import { JoseFComponent } from '../jose-f/jose-f.component';
import { KevinFComponent } from '../kevin-f/kevin-f.component';
import { MariaFComponent } from '../maria-f/maria-f.component';
import { MateoFComponent } from '../mateo-f/mateo-f.component';
import { SofiaFComponent } from '../sofia-f/sofia-f.component';
import { local } from '../../models/local';
import { InvoiceService } from '../../services/services.fashions';
import { MariaSuc } from '../../models/Maria';
import { SofiaSuc } from '../../models/Sofia';
import { JoseSuc } from '../../models/Jose';
import { KevinSuc } from '../../models/Kevin';  
import { MateoSuc } from '../../models/Mateo';



@Component({
  selector: 'app-information',
  standalone: true,
  imports: [JoseFComponent, KevinFComponent, MariaFComponent, MateoFComponent, SofiaFComponent],
  templateUrl: './information.component.html',
})
export class InformationComponent implements OnInit {
  MariaSucursal! : MariaSuc;
  JosueSucursal! : JoseSuc;
  KevinSucursal! : KevinSuc;
  MateoSucursal! : MateoSuc;
  SofiaSucursal! : SofiaSuc;


  constructor(private service: InvoiceService) { }
  ngOnInit(): void {
    this.service.getMariaSuc().subscribe(
      (data: MariaSuc) => {
        this.MariaSucursal = data;
        console.log(' Datos recibidos del backend:', data)
      },
    ),
      this.service.getJoseSuc().subscribe(
        (data: JoseSuc) => {
          this.JosueSucursal = data;
          console.log(' Datos recibidos del backend:', data)
        },
      ),
      //kevin
      this.service.getKevinSuc().subscribe(
        (data: KevinSuc) => {
          this.KevinSucursal = data;
          console.log(' Datos recibidos del backend:', data)
        },
      ),

    //sofia 
    this.service.getSofiaSuc().subscribe(
      (data: SofiaSuc) => {
        this.SofiaSucursal = data;
        console.log(' Datos recibidos del backend:', data)
      },
    ),
    //Mateo
    this.service.getMateoSuc().subscribe(
      (data: MateoSuc) => {
        this.MateoSucursal = data;
        console.log(' Datos recibidos del backend:', data)
      },
    )
  }
}



