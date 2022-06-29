import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center pt-3 pb-1">
      <h4>Desenvolvido por <a href="http://github.com/kaiocp" target="_blank" >Kaio P.</a></h4>
    </footer>
  `,
  styles: [`
    * {
      font-family: var(--font-pt-mono)!important;
    }
    footer {
      position: fixed;
      background-color: white!important;
      left: 0;
      bottom: 0;
      width: 100%;
      -webkit-box-shadow: 0px -11px 25px 3px rgba(0,0,0,0.04)!important;
      box-shadow: 0px -11px 25px 3px rgba(0,0,0,0.04)!important;
    }
    a {
      text-decoration: none;
      color: var(--deep-purpble);
      transition: .15s;
    }
    a:hover {
      color: var(--amber);
    }
  `]
})
export class FooterComponent{
  constructor() { }
}
