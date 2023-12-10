import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-not-authenticated',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-authenticated.component.html',
    styleUrl: './not-authenticated.component.scss'
})
export class NotAuthenticatedComponent {
}
