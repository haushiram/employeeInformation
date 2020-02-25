import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  private messageSource = new BehaviorSubject(null);
  getEmployeeInfo = this.messageSource.asObservable();

  storeEmployeeInfo(message: any) {
    this.messageSource.next(message)
  }

  private messageSource1 = new BehaviorSubject(null);
  getEmployeeObjInfo = this.messageSource1.asObservable();

  storeEmployeeObjInfo(message: any) {
    this.messageSource1.next(message)
  }

}
