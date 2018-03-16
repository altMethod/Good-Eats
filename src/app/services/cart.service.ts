import { Cart } from './cart';
import { Food } from './food';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  cartUrl = 'api/cart';
  cartItem = <Cart>{};
  cartCount = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

  getCart(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.cartUrl);
  }

  addCartItem(item: Food): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.getCart().subscribe(cart => {
      this.cartItem.id = cart.length + 1;
      this.cartItem.itemId = item.id;
      this.cartItem.price = item.price;
      this.cartCount.next(this.cartItem.id);
      this.httpClient.put(this.cartUrl, this.cartItem, httpOptions).subscribe();
    });
  }

  deleteCartItem(item: Cart): Observable<Cart> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.cartUrl}/${item.id}`;

    return this.httpClient.delete<Cart>(url, httpOptions);
  }

}
