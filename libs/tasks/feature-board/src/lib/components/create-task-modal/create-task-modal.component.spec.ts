import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CreateTaskModalComponent } from './create-task-modal.component';

describe('CreateTaskModalComponent', () => {
    let spectator: Spectator<CreateTaskModalComponent>;
    const createComponent = createComponentFactory(CreateTaskModalComponent);

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
