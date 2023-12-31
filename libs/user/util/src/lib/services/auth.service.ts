/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private httpClient = inject(HttpClient);
    private router = inject(Router);


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

    public setAuthorizationHeader(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${this.getToken()}`
        });
    }

    public logout() {
        this.router.navigate(['/not-authenticated']);
        localStorage.removeItem('token');
    }
}
