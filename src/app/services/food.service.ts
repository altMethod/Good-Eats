import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  foodUrl = 'api/food';

  constructor(private httpClient: HttpClient) {}

  getFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.foodUrl);
  }

  getFoodById(id: number): Observable<Food> {
    return this.httpClient.get<Food>(`${this.foodUrl}/${id}`);
  }

}
