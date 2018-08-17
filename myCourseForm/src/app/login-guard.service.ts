import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(): boolean {
        
        if (this.loginService.isUserLoggedIn()) {
            return true;
        }
       
        this.router.navigate(['/login']);
        return false;
    }
} 