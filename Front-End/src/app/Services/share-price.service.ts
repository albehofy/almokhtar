import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharePriceService {
  // price = 0;
  // constructor() { }
  // formSelectedCoursePrice(price:number){
  //   this.price = price
  // }
  
  private price: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public price$ = this.price.asObservable();

  constructor() { }

  updateDialogState(price: number): void {
    this.price.next(price);
  }


}
