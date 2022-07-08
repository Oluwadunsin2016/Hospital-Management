import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoGuardGuard implements CanActivate {
constructor( public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user =JSON.parse(localStorage.getItem("currentPatientId"))
    if (!user) {
     this.router.navigate(['/login'])
    }
    return true;
  }
  
}
