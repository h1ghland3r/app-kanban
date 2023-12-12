/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from 'shared/domain';

@Component({
    selector: 'app-edit-task-modal-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
    templateUrl: './edit-task-modal.component.html',
    styleUrls: ['./edit-task-modal.component.scss']
})
export class EditTaskModalComponent implements OnInit {

    private dialogRef = inject(MatDialogRef<EditTaskModalComponent>);
    private task: Task = inject(MAT_DIALOG_DATA);

    fb = inject(FormBuilder);

    form = this.fb.group({
        id: ['', Validators.required],
        lista: ['', Validators.required],
        titulo: ['', Validators.required],
        conteudo: ['', Validators.required],
    })

    ngOnInit(): void {
        this.form.patchValue(this.task);
    }

    public onSubmit(): void {
        if (this.form.invalid) {
            return;
        }

        const task: Task = {
            id: this.task.id,
            titulo: this.form.controls.titulo.value ?? '',
            conteudo: this.form.controls.conteudo.value ?? '',
            lista: this.task.lista,
        }

        this.dialogRef.close(task);
    }
}
