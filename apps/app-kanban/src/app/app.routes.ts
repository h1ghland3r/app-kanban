import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'board',
                loadChildren: () => import('tasks/feature-board').then((m) => m.TASKS_FEATURE_ROUTES)
            }
        ]
    }
];
