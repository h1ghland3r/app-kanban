import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { Task, TaskStatus } from 'shared/domain';
import { EditTaskModalComponent } from './edit-task-modal.component';

const mockTask: Task = {
    id: '1',
    lista: TaskStatus.TODO,
    titulo: 'Sample Task',
    conteudo: 'Sample Description'
};

describe('EditTaskModalComponent', () => {
    let spectator: Spectator<EditTaskModalComponent>;

    const createComponent = createComponentFactory({
        component: EditTaskModalComponent,
        providers: [
            {
                provide: MatDialogRef,
                useValue: {}
            },
            {
                provide: MAT_DIALOG_DATA,
                useValue: mockTask
            }
        ]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
