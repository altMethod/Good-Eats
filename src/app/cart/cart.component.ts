import { FoodService } from './../services/food.service';
import {Food} from '../services/food';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, public foodService: FoodService) { }
  cartItems: Food[] = [];

  ngOnInit() {
    this.cartService.getCart().subscribe((items: Cart[]) => {
      console.log(items);
      items.forEach(item => {
        this.foodService.getFoodById(item.itemId).subscribe(food => this.cartItems.push(food));
      });
    });
  }

  deleteItem(item: Cart): void {
    this.cartService.deleteCartItem(item).subscribe();
  }

}
