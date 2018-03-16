import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Good Eats';
  name: string;
  cartObs: Observable<any>;
  cartCount: Observable<number>;

  constructor(public cartService: CartService) {
    this.cartCount = this.cartService.cartCount;
  }

  ngOnInit() {
  }

  toggleLogin(): void {
    !this.name ? this.name = 'Sarah Jones' : this.name = null;
  }
}
