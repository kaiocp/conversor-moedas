import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-symbols></app-symbols>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'conversor-moedas';
}
