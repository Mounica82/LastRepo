import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
isAuthenticated :boolean = false;
  constructor() { }

  login(email:string) : Observable<boolean>{
    if(email==="pathimounica8@gmail.com"){
      this.isAuthenticated = true;
      return of(true);
    }
    else{
      return of(false);
    }
   
  }
}
