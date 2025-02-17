import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './features/countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent],
  template: `
    <h1>Angular Signals Demo</h1>
    <app-countdown></app-countdown>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
