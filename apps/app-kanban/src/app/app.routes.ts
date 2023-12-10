import { Route } from '@angular/router';
import { NotAuthenticatedComponent } from 'user/shell';
import { AuthGuard } from 'user/util';

export const appRoutes: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'board',
                pathMatch: 'full'
            },
            {
                path: 'board',
                loadChildren: () => import('tasks/feature-board').then((m) => m.TASKS_FEATURE_ROUTES)
            }
        ]
    },
    {
        path: 'not-authenticated',
        component: NotAuthenticatedComponent
    },
    {
        path: '**',
        redirectTo: 'board',
        pathMatch: 'full'
    },
];
