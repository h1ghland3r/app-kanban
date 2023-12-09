import { Route } from '@angular/router';
import { BoardContainerComponent } from '../components/board-container/board-container.component';

export const TASKS_FEATURE_ROUTES: Route[] = [
    {
        path: '',
        component: BoardContainerComponent
    }
] as Route[];
