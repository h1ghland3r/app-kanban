/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewTask, TaskStatus } from 'shared/domain';

@Component({
    selector: 'app-create-task-modal-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
    templateUrl: './create-task-modal.component.html',
    styleUrls: ['./create-task-modal.component.scss']
})
export class CreateTaskModalComponent {
    dialogRef = inject(MatDialogRef<CreateTaskModalComponent>);
    fb = inject(FormBuilder);

    form = this.fb.group({
        title: [null, Validators.required],
        description: [null, Validators.required],
    })

    public onSubmit(): void {
        const newTask: NewTask = {
            titulo: this.form.controls.title.value ?? '',
            conteudo: this.form.controls.description.value ?? '',
            lista: TaskStatus.TODO,
        }

        if (this.form.valid) {
            this.dialogRef.close(newTask);
        }
    }
}
