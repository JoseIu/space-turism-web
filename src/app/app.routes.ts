import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./layout/layout/layout.component').then(
        (m) => m.LayoutComponent
      );
    },
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'destination',
        loadComponent: () =>
          import('./pages/destination-page/destination-page.component').then(
            (m) => m.DestinationPageComponent
          ),
      },
      {
        path: 'crew',
        loadComponent: () =>
          import('./pages/crew-page/crew-page.component').then(
            (m) => m.CrewPageComponent
          ),
      },
      {
        path: 'technology',
        loadComponent: () =>
          import('./pages/technology-page/technology-page.component').then(
            (m) => m.TechnologyPageComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
