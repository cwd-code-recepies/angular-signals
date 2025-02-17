import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Angular Signals Demo</h1>
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/countdown">Countdown</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
