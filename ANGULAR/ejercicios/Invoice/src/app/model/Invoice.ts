import { company } from "./company";
import { customer } from "./customer";
import { invoiceItem } from "./InvoiceItem";


export class invoice {
    id! : string;
    company! : company;
    customer! : customer;
    items! : invoiceItem[];
}