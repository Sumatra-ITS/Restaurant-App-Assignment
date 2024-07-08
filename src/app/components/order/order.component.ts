import {Component} from '@angular/core';
import {DishService, SideBarProps} from "../../services/dish.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  orderLines$ = this.dishService.orderLines$;
  summary$ = this.dishService.summary$;

  constructor(private dishService: DishService) {
  }

  toggleSideBar(props?: SideBarProps) {
    this.dishService.toggleSideBar(props)
  }
}
