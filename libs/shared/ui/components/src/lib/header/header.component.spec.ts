import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let spectator: Spectator<HeaderComponent>;

    const createComponent = createComponentFactory({
        component: HeaderComponent,
        imports: [HttpClientTestingModule]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
