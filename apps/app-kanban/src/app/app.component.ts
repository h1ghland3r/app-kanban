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

    // update credentials to be able to test Not Authenticated Component and the AuthGuard working
    private credentials = { login: "letscode", password: "lets@123" };

    constructor() {
        localStorage.removeItem('token');
        this.authService.login(this.credentials.login, this.credentials.password).subscribe();
    }
}
