import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: 'cattaga',
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/cattaga/cattaga.page').then(m => m.CattagaPage),
            },
            {
                path: 'kiceki',
                loadComponent: () => import('./pages/kiceki/kiceki.page').then(m => m.KicekiPage)
            },
            {
                path: 'clips',
                loadComponent: () => import('./pages/clips/clips.page').then(m => m.ClipsPage)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
