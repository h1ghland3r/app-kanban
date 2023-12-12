import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { AuthService } from 'user/util';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;

    const authServiceMock = {
        login: jest.fn(() => of({})),
    };

    const createComponent = createComponentFactory({
        component: AppComponent,
        providers: [
            mockProvider(AuthService, {
                login: authServiceMock.login,
            })
        ]
    });

    beforeEach(() => {
        spectator = createComponent();
        const removeItemMock = jest.fn();
        Object.defineProperty(window, 'localStorage', { value: { removeItem: removeItemMock } });
    });

    it('should create the app', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should remove current token and login', () => {
        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
        expect(authServiceMock.login).toHaveBeenCalledWith('letscode', 'lets@123');
    });
});
