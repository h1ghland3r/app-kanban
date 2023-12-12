import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BoardContainerComponent } from './board-container.component';

describe('BoardContainerComponent', () => {
    let spectator: Spectator<BoardContainerComponent>;
    const createComponent = createComponentFactory({
        component: BoardContainerComponent,
        imports: [HttpClientTestingModule]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
