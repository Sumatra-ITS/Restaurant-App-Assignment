import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish, Order} from "./types";
import {BehaviorSubject, map} from "rxjs";


export type SideBarProps = 'payment' | 'order' | undefined

@Injectable({
  providedIn: 'root'
})
export class DishService {
  readonly apiUrl = 'http://localhost:3000'
  private readonly deliveryFees = 3

  private _order = new BehaviorSubject<Order>({})
  orderVisible = signal(false)
  paymentVisible = signal(false)

  constructor(private _http: HttpClient) {
  }

  toggleSideBar(prop?: SideBarProps) {
    const order = this._order.getValue();
    if (!Object.keys(order).length) {
      return
    }
    this.orderVisible.set(prop === 'order')
    this.paymentVisible.set(prop === 'payment')
  }

  get order$() {
    return this._order.asObservable();
  }

  get orderLines$() {
    return this._order.asObservable().pipe(map(x => Object.values(x)));
  }

  get summary$() {
    return this.orderLines$.pipe(
      map(x => x.reduce((acc, val) => {
          const subtotal = val.dishPrice * val.quantity;
          acc[0][1] += subtotal;
          acc[2][1] += subtotal
          return acc;
        }, [
          ['Subtotal', 0],
          ['Delivery fees', this.deliveryFees],
          ['Total', this.deliveryFees],
        ] as [string, number][])
      ), map<[string, number][], [string, string][]>(x => x.map(y => [y[0], '€ ' + y[1].toFixed(2)])));
  }

  orderLine({id, name, price}: { id: string, name: string, price: number }, quantity: number) {
    let order = this._order.getValue();
    if (quantity === 0) {
      delete order[id]
    } else {
      order[id] = {dishId: id, dishName: name, dishPrice: price, quantity}
    }
    this._order.next(order)
  }

  list() {
    return this._http.get<Dish[]>(this.apiUrl + '/dishes')
      .pipe(map(x => x.map(x => ({...x, image: this.apiUrl + '/' + x.image}))));
  }
}
