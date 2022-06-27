import { ExchangeRateApiService } from './../services/exchange-rate-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  public symbolsList: any; // melhorar tipagem

  constructor(private exchangeRateApiService: ExchangeRateApiService) { }

  ngOnInit(): void {
    this.exchangeRateApiService.getSymbols().subscribe({
      next: (res) => this.symbolsList = Object.values(res.symbols),
      error: (err) => console.log(err)
      }
    )
  }

}
