import { Component, Input } from '@angular/core';
import { company } from '../../model/company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.component.html',
})
export class CompanyViewComponent {
  @Input()company! : company 
}
