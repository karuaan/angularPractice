import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    invalidCredentialMsg: string;
    loginForm: FormGroup;

    constructor(private loginService: LoginService, private router: Router, private formbuilder: FormBuilder) {
        this.loginForm = this.formbuilder.group({
            username: [],
            password: []
        });
    }
    
    onFormSubmit() {
        let uname = this.loginForm.get('username').value;
        let pwd = this.loginForm.get('password').value;
        this.loginService.isUserAuthenticated(uname, pwd).subscribe(
            authenticated => {
                if (authenticated) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
                    this.router.navigate(['/login']);
                }
            }
        );
    }
} 