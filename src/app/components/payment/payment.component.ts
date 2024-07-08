import {Component} from '@angular/core';
import {DishService, SideBarProps} from "../../services/dish.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  summary$ = this.dishService.summary$;

  paymentForm = {
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    dontCallMe: true
  }

  constructor(private dishService: DishService) {
  }

  toggleSideBar(props?: SideBarProps) {
    this.dishService.toggleSideBar(props)
  }

  submit() {
    console.log(this.paymentForm)
  }
}
