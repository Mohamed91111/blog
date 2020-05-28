import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {

  private theBoolean= new BehaviorSubject<boolean>(false);
  public obBoolean = this.theBoolean.asObservable();
  
  authSend(newValue):void{
    this.theBoolean.next(newValue)
  }
  

  constructor() {
    
   }
}
