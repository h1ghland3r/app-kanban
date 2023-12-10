import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() title?: string = '';
    @Input() description?: string = '';
    @Input() classes?: string = '';
    @Input() cardWidth: number = 300;
    @Input() cardHeight: number = 200;
}
