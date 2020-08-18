import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../app/services/users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizacionGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UsersService
) { }
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        const currentUser = this.authenticationService.getToken();
        if (currentUser) {      
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
}
}
