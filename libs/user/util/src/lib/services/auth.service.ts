/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    httpClient = inject(HttpClient);
    router = inject(Router);


    public login(login: string, senha: string) {
        return this.httpClient.post<any>(environment.endpoints.login, { login, senha }).pipe(
            tap((response) => {
                if (response) {
                    return localStorage.setItem('token', response);
                }
            })
        );
    }

    public getToken(): string | null {
        return localStorage.getItem('token');
    }

    public logout() {
        this.router.navigate(['/not-authenticated']);
        localStorage.removeItem('token');
    }
}
