import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
    let spectator: Spectator<LoadingSpinnerComponent>;
    const createComponent = createComponentFactory(LoadingSpinnerComponent);

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
