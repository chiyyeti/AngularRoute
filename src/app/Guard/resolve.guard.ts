import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  
  // we will have a service API to get details
  /*
  this.userService.getAccountInformation(userId).subscribe(data=>{});
  */
  Obj={
   userId:123,
   userName:"gana"
   
 };
   resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
return this.Obj
    
  }
 
  
}
