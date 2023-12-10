import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService, environment } from 'user/util';
import { Task } from './../../../../../shared/domain/src/lib/interfaces/task.interface';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private httpClient = inject(HttpClient);
    private authService = inject(AuthService);

    public getAll(): Observable<unknown> {
        const headers = this.authService.setAuthorizationHeader();
        return this.httpClient.get<Task[]>(`${environment.endpoints.cards}`, { headers })
            .pipe(
                catchError(this.errorHandler)
            )
    }

    private errorHandler(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Server returned code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
