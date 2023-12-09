import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let spectator: Spectator<CardComponent>;
    const createComponent = createComponentFactory(CardComponent);

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
