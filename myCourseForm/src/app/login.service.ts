import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { User } from '../app/login/user';

const USERS = [
    new User(1, 'user1', 'user1'),
    new User(2, 'user2', 'user2')
];
let usersObservable = Observable.of(USERS);

@Injectable()
export class LoginService {

    private isloggedIn: boolean = false;

    getAllUsers(): Observable<User[]> {
        return usersObservable;
    }

    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUsers()
            .map(users => {
                let user = users.find(user => (user.username === username) && (user.password === password));
                if (user) {
                    this.isloggedIn = true;

                } else {
                    this.isloggedIn = false;
                }
                return this.isloggedIn;
            });
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

} 