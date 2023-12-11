import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, throwError } from 'rxjs';
import { NewTask, Task } from 'shared/domain';
import { AuthService, environment } from 'user/util';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private httpClient = inject(HttpClient);
    private authService = inject(AuthService);

    public getAll(): Observable<Task[]> {
        const headers = this.authService.setAuthorizationHeader();
        return this.httpClient.get<Task[]>(`${environment.endpoints.cards}`, { headers })
            .pipe(
                catchError(this.errorHandler)
            )
    }

    public createTask(newTask: NewTask): Observable<unknown> {
        const headers = this.authService.setAuthorizationHeader();
        return this.httpClient.post<NewTask>(`${environment.endpoints.cards}`, JSON.stringify(newTask), { headers })
            .pipe(
                catchError(this.errorHandler)
            )
    }

    public updateTask(task: Task): Observable<Task> {
        const headers = this.authService.setAuthorizationHeader();
        return this.httpClient.put<Task>(`${environment.endpoints.cards}/${task.id}`, task, { headers })
            .pipe(
                catchError(this.errorHandler)
            )
    }

    public deleteTask(task: Task): Observable<Task[]> {
        const headers = this.authService.setAuthorizationHeader();
        return this.httpClient.delete<Task[]>(`${environment.endpoints.cards}/${task.id}`, { headers })
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
