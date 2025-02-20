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
  },
  { 
    path: 'http-example',
    loadComponent: () => import('../app/pages/http-example/http-example.page').then(m => m.HttpExamplePage)
  }
];
