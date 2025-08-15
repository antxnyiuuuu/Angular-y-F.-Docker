import { company } from "./company";
import { customer } from "./customer";
import { items } from "./items";


export class invoice {
    id! : string;
    company! : company;
    customer! : customer;
    items! : items[];
}