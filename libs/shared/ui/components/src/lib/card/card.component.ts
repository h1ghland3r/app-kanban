/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownConverterService } from 'shared/util/services';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule, MarkdownModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

    @Input() title?: string = '';
    @Input() description?: string = '';
    @Input() classes?: string = '';
    @Input() cardWidth: number = 300;
    @Input() cardHeight: number = 200;
    @Input() hasFooterActions = false;

    private markdownConverterService = inject(MarkdownConverterService);
    public convertedDescriptionMarkdown: any;

    ngOnInit(): void {
        if (this.description)
            this.convertToMarkdown(this.description);
    }

    public convertToMarkdown(description: string) {
        this.convertedDescriptionMarkdown = this.markdownConverterService.convertToMarkdown(description);
    }
}
