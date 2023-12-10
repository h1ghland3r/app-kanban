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
    authService = inject(AuthService);

    private credentials = { login: "letscode", password: "lets@123" };

    constructor() {
        this.authService.login(this.credentials.login, this.credentials.password).subscribe();
    }
}
