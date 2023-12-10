import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-not-authenticated',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './not-authenticated.component.html',
    styleUrl: './not-authenticated.component.scss'
})
export class NotAuthenticatedComponent {

    private router = inject(Router);

    public navigateToHome(): void {
        this.router.navigate(['/']);
    }
}
