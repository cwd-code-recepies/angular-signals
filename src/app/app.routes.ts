import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';

export const routes: Routes = [
  { 
    path: '',
    component: HomePage
  },
  { 
    path: 'countdown',
    loadComponent: () => import('./features/countdown/countdown.page').then(m => m.CountdownPage)
  }
];
