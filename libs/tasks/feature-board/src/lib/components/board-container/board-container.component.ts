/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';
import { NewTask, Task, TaskStatus } from 'shared/domain';
import { CardComponent, HeaderComponent, LoadingSpinnerComponent } from 'shared/ui/components';
import { LoadingService } from 'shared/util/services';
import { TaskService } from '../../services/task.service';
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';

@Component({
    selector: 'app-board-container',
    standalone: true,
    imports: [CommonModule, CardComponent, HeaderComponent, LoadingSpinnerComponent, MatButtonModule, MatDialogModule, MatIconModule],
    templateUrl: './board-container.component.html',
    styleUrl: './board-container.component.scss'
})
export class BoardContainerComponent implements OnInit {
    private taskService = inject(TaskService);
    private loadingService = inject(LoadingService);
    private dialog = inject(MatDialog);

    loading$ = this.loadingService.isLoading$;
    showContent = false;

    todoTasks: Task[] = [];
    doingTasks: any[] = [{ titulo: 'Task 1', conteudo: 'Lorem Ipsum' }, { titulo: 'Task 2', conteudo: 'Lorem Ipsum' }];
    doneTasks: any[] = [{ titulo: 'Task 1', conteudo: 'Lorem Ipsum' }];

    public constructor() {
        this.getAllTasks();
    }

    public ngOnInit(): void {
        // To simulate server side call
        this.loadingService.show();
        setTimeout(() => {
            this.loadingService.hide();
            this.showContent = true;
        }, 2000);
    }

    public openCreateTaskModal(): void {
        const dialogRef = this.dialog.open(CreateTaskModalComponent, {
            width: '400px',
            data: {}
        });

        dialogRef.afterClosed().subscribe((task: NewTask) => {
            this.taskService.createTask(task).subscribe();
            this.showContent = false;
            this.loadingService.show();
            this.getAllTasks();

            // To simulate server side call
            setTimeout(() => {
                this.loadingService.hide();
                this.showContent = true;
            }, 1000);
        });
    }

    private getAllTasks(): void {
        this.taskService.getAll()
            .pipe(
                tap((tasks: Task[]) => {
                    tasks.forEach(task => {
                        if (task.lista === TaskStatus.TODO && !this.todoTasks.some(existingTask => existingTask.id === task.id)) {
                            this.todoTasks.push(task);
                        }

                        if (task.lista === TaskStatus.DOING && !this.doingTasks.some(existingTask => existingTask.id === task.id)) {
                            this.doingTasks.push(task);
                        }

                        if (task.lista === TaskStatus.DONE && !this.doneTasks.some(existingTask => existingTask.id === task.id)) {
                            this.doneTasks.push(task);
                        }
                    });
                }),
            )
            .subscribe();
    }
}
