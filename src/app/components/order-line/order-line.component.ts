import {Component, input} from '@angular/core';
import {Dish, OrderLine} from "../../services/types";
import {DishService} from "../../services/dish.service";

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.component.html',
  styleUrl: './order-line.component.css'
})
export class OrderLineComponent {
  orderLine = input.required<OrderLine>()

  constructor(private dishService: DishService) {
  }

  quantityChange(quantity: number) {
    this.dishService.orderLine({
      id: this.orderLine().dishId,
      name: this.orderLine().dishName,
      price: this.orderLine().dishPrice
    }, quantity)
  }
}
