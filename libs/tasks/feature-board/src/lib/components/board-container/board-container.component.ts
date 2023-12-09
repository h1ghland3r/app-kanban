import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'shared/ui/components';

@Component({
    selector: 'app-board-container',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './board-container.component.html',
    styleUrl: './board-container.component.scss'
})
export class BoardContainerComponent {}
