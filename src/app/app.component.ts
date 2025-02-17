import { Component, effect, EffectCleanupRegisterFn, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = signal('angular-signals');
  #countdown = signal(0);

  #titleEffect = effect(() => {
    if (this.#countdown() === 10) {
      this.title.set("Blast off 🚀🚀🚀");
      return;
    }
    this.title.set("Countdown: " + this.#countdown());
  });

  #countdownEffect = effect((onCleanup: EffectCleanupRegisterFn) => {
    const timers: any[] = [];
    for (let i = 0; i <= 10; i++) {
      const timer = setTimeout(() => {
        this.#countdown.set(i);
      }, 100 * i)

      timers.push(timer);
    }

    onCleanup(() => {
      timers.forEach(clearTimeout);
    })
  });
}
