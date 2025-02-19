import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { 
    path: '',
    component: HomePage
  },
  { 
    path: 'countdown',
    loadComponent: () => import('./pages/countdown/countdown.page').then(m => m.CountdownPage)
  }
];
