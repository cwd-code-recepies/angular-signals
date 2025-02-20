import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.page.html',
  standalone: true,
})
export class HttpExamplePage {
  private http = inject(HttpClient);

  joke = toSignal(
    this.http
      .get<{ joke: string }>('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .pipe(map((response) => response.joke))
  );
}
