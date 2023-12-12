/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';
import { Task, TaskStatus } from 'shared/domain';
import { MarkdownConverterService } from 'shared/util/services';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule, MarkdownModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

    @Input() task?: Task;
    @Input() cardWidth: number = 300;
    @Input() cardHeight: number = 200;
    @Output() editTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() moveLeft: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() moveRight: EventEmitter<Task> = new EventEmitter<Task>();

    private markdownConverterService = inject(MarkdownConverterService);
    public convertedDescriptionMarkdown: any;
    public taskStatus = TaskStatus;

    ngOnInit(): void {
        if (this.task?.conteudo) {
            this.convertToMarkdown(this.task.conteudo);
        }
    }

    public onEditClick() {
        this.editTask.emit(this.task);
    }

    public onDeleteClick() {
        this.deleteTask.emit(this.task);
    }

    public onMoveLeftClick() {
        this.moveLeft.emit(this.task);
    }

    public onMoveRightClick() {
        this.moveRight.emit(this.task);
    }

    private convertToMarkdown(description: string) {
        this.convertedDescriptionMarkdown = this.markdownConverterService.convertToMarkdown(description);
    }
}
