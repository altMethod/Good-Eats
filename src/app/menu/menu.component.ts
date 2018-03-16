import { CartService } from './../services/cart.service';
import { LoaderService } from './../services/loader.service';
import { Observable } from 'rxjs/Observable';
import { FoodService } from './../services/food.service';
import { Food } from '../services/food';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from './../services/cart';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('modal') public modalContent;
  foodSelected = <Food>{};
  foodItems: Food[] = [];
  cartItem: Cart;

  constructor(public foodService: FoodService,
    public loaderService: LoaderService,
    public cartService: CartService) { }

  ngOnInit() {
    this.loaderService.showLoader();
    this.foodSelected.img = 'https://placehold.it/64x64';

    this.foodService.getFood().subscribe(items => {
      this.foodItems = items;
      this.loaderService.hideLoader();
    });
  }

  public showModal(id: number): void {
    this.foodService.getFoodById(id).subscribe(item => {
      this.foodSelected = item;
      this.modalContent.show();
    });
  }

  addItem(item: Food): void {
    this.cartService.addCartItem(item);
    this.modalContent.hide();
  }

}
