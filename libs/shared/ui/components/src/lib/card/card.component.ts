import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() title?: string = '';
    @Input() description?: string = '';
    @Input() classes?: string = '';
    @Input() cardWidth: number = 300;
    @Input() cardHeight: number = 200;
    @Input() hasFooterActions = false;
}
