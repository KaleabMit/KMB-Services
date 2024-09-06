import { Component } from '@angular/core';

@Component({
  selector: 'app-paymenttype',
  templateUrl: './paymenttype.component.html',
  styleUrls: ['./paymenttype.component.css']
})
export class PaymenttypeComponent {
  myform: any;

  onlinepay(){
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
}}
