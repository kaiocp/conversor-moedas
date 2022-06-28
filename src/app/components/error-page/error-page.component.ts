import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: '<p>Página não encontrada.</p>',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
