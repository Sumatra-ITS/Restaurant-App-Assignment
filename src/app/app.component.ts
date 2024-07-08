import {Component} from '@angular/core';
import {DishService, SideBarProps} from "./services/dish.service";
import {Dish} from "./services/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  dishes$ = this.dishService.list();
  order$ = this.dishService.order$;
  orderLines$ = this.dishService.orderLines$;

  readonly orderVisible = this.dishService.orderVisible;
  readonly paymentVisible = this.dishService.paymentVisible;

  constructor(private dishService: DishService) {
  }

  title = 'Restaurant App Assignment';
  selectedOption = 'popular'
  options = [
    {value: 'popular', name: 'Popular'},
    {value: 'burgers', name: 'Burgers'},
    {value: 'steaks', name: 'Steaks'},
  ];

  quantityChange(dish: Dish, quantity: number) {
    this.dishService.orderLine(dish, quantity)
  }

  toggleSideBar(prop?: SideBarProps) {
    this.dishService.toggleSideBar(prop)
  }
}
