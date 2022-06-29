import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <section class="d-flex flex-column justify-content-center align-items-center text-center">
      <div class="d-flex justify-content-center align-items-center">
        <img src="../../../assets/images/404.svg" alt="Error 404">
        <h1>Página não encontrada.</h1>
      </div>
      <h4>Ir para <a routerLink="/">home</a></h4>
    </section>
  `,
  styles: [`
    * {
      font-family: var(--font-karla)!important;
      margin: 0 0!important;
    }
    section {
      margin-top: 10rem!important;
    }
    img {
      max-width: 30px;
      margin-right: 10px!important;
    }
    div {
      width: 100%;
      margin: 0 auto;
    }
  `]
})
export class ErrorPageComponent {
  constructor() { }
}
