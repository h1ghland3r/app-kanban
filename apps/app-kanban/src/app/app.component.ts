import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'user/util';

@Component({
    standalone: true,
    imports: [RouterOutlet],
    selector: 'app-kanban-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private authService = inject(AuthService);

    constructor() {
        // update credentials to test the NotAuthenticatedComponent and AuthGuard working, also you can sign out
        const credentials = { login: 'letscode', password: 'lets@123' };

        localStorage.removeItem('token');
        if (credentials.login && credentials.password) {
            this.authService.login(credentials.login, credentials.password).subscribe(
                (response) => {
                    console.log('Login successful:', response);
                },
                (error) => {
                    console.error('Login error:', error);
                }
            );
        }
    }
}
