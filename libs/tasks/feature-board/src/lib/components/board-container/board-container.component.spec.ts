import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BoardContainerComponent } from './board-container.component';

describe('BoardContainerComponent', () => {
    let spectator: Spectator<BoardContainerComponent>;
    const createComponent = createComponentFactory(BoardContainerComponent);

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
