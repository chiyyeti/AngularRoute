import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  public data=true
  canActivate()
     {
      if(this.data){
        alert('you are authorised to view')
        return true;
      }else{
        alert('not authorised to view')
      }
  }
  
}
