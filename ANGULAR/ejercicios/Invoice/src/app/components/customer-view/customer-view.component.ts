import { Component, Input } from '@angular/core';
import { customer } from '../../model/customer';

@Component({
  selector: 'customer-view',
  imports: [],
  templateUrl: './customer-view.component.html',
})
export class CustomerViewComponent {

  @Input() customer!: customer; // Replace 'any' with the appropriate type for customer

}
