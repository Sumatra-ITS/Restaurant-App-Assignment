export interface Dish {
  id: string
  name: string,
  description: string,
  image: string,
  price: number,
  category: string,
  popular: boolean
}


export interface OrderLine {
  dishId: string,
  dishName: string,
  dishPrice: number,
  quantity: number;
}

export type Order = Record<string, OrderLine>
