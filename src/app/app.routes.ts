import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('../../src/app/features/home/home.routes').then((m) => m.homeRoutes),
            data: { title: 'HOME' },
          },
        ]
      }
];
