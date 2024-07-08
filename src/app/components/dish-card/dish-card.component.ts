import {Component, input, output} from '@angular/core';
import {Dish} from "../../services/types";

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.css'
})
export class DishCardComponent {
  dish = input.required<Dish>();

  orderLine = input<{ quantity: number }>();
  quantityChange = output<number>();

  changeQuantity(value: number) {
    this.quantityChange.emit(value)
  }
}
