import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {
  // Filter
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();

  // Allow creation
  private allowance = new BehaviorSubject<any>({});
  selectedAllowance = this.allowance.asObservable();

    // Allow creation
    private ready = new BehaviorSubject<any>({});
    selectedReady = this.ready.asObservable();
  constructor() { 
    this.allowance.next(false);
    this.ready.next(false);
  }

  setProduct(product: any) {
    this.product$.next(product);
  }

  setAllowance(product: any) {
    this.allowance.next(product);
  }
  setReady(product: any) {
    this.ready.next(product);
  }
}
