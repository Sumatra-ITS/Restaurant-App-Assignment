import {Component} from '@angular/core';
import {DishService, SideBarProps} from "./services/dish.service";
import {Dish} from "./services/types";
import {BehaviorSubject, combineLatest, map, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  _selectedCategory = new BehaviorSubject('popular');
  _query = new BehaviorSubject('');

  get selectedCategory$() {
    return this._selectedCategory.asObservable();
  }

  get query$() {
    return this._query.asObservable();
  }

  dishes$ = combineLatest([this.selectedCategory$, this.query$]).pipe(
    switchMap(cat => {
      if (cat[0] === 'popular') {
        return this.dishService.list().pipe(map(d => d.filter(x => x.popular && x.name.toLowerCase().includes(cat[1].toLowerCase()))));
      }
      return this.dishService.list().pipe(map(d => d.filter(x => x.category === cat[0] && x.name.toLowerCase().includes(cat[1].toLowerCase()))));
    }),
  );
  order$ = this.dishService.order$;
  orderLines$ = this.dishService.orderLines$;

  readonly orderVisible = this.dishService.orderVisible;
  readonly paymentVisible = this.dishService.paymentVisible;

  constructor(private dishService: DishService) {
  }

  title = 'Restaurant App Assignment';
  options = [
    {value: 'popular', name: 'Popular'},
    {value: 'Burgers', name: 'Burgers'},
    {value: 'Steaks', name: 'Steaks'},
  ];

  quantityChange(dish: Dish, quantity: number) {
    this.dishService.orderLine(dish, quantity)
  }

  toggleSideBar(prop?: SideBarProps) {
    this.dishService.toggleSideBar(prop)
  }

  categoryChanged(category: string) {
    this._selectedCategory.next(category);
  }

  queryChanged(q: string) {
    this._query.next(q);
  }
}
