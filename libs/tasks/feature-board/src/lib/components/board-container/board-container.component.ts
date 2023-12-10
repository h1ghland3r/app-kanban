/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';
import { CardComponent, HeaderComponent, LoadingSpinnerComponent } from 'shared/ui/components';
import { LoadingService } from 'shared/util/services';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-board-container',
    standalone: true,
    imports: [CommonModule, CardComponent, HeaderComponent, LoadingSpinnerComponent, MatButtonModule, MatIconModule],
    templateUrl: './board-container.component.html',
    styleUrl: './board-container.component.scss'
})
export class BoardContainerComponent implements OnInit {
    private taskService = inject(TaskService);
    private loadingService = inject(LoadingService);

    loading$ = this.loadingService.isLoading$;
    showContent = false;

    todoTasks: any[] = [{ title: 'Task 1', description: 'Lorem Ipsum' }];
    doingTasks: any[] = [{ title: 'Task 1', description: 'Lorem Ipsum' }, { title: 'Task 2', description: 'Lorem Ipsum' }];
    doneTasks: any[] = [{ title: 'Task 1', description: 'Lorem Ipsum' }];

    public constructor() {
        this.taskService.getAll()
            .pipe(
                tap((tasks) => {
                    console.log(tasks);
                }),
            )
            .subscribe();
    }

    public ngOnInit(): void {
        this.loadingService.show();
        setTimeout(() => {
            this.loadingService.hide();
            this.showContent = true;
        }, 2000);
    }
}
