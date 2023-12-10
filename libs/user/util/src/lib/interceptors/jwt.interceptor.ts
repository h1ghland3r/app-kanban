/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environments";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private authService = inject(AuthService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add jwt token to auth header
        const token = this.authService.getToken();
        const apiUrl = request.url.startsWith(environment.apiUrl);

        if (token && apiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
