import { Component, computed, effect } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countdown-page',
  standalone: true,
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.css']
})
export class CountdownPage {
  readonly #COUNTDOWN_START = 10;
  readonly #COUNTDOWN_INTERVAL = 500;

  #countdown = toSignal(
    interval(this.#COUNTDOWN_INTERVAL).pipe(
      map(i => this.#COUNTDOWN_START - i),
      take(this.#COUNTDOWN_START + 1),
    ),
    { initialValue: this.#COUNTDOWN_START }
  );

  launchCountdownDisplay = computed(() => 
    this.#countdown() === 0 
      ? "Blast off 🚀🚀🚀" 
      : `Countdown: ${this.#countdown()}`
  );

  constructor() {
    effect(() => {
      console.log('Launch Status:', this.launchCountdownDisplay());
    });
  }
}
