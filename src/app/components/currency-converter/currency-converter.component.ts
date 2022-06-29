import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Symbols } from 'src/app/models/symbols';
import { ExchangeRateApiService } from 'src/app/services/exchange-rate-api.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  symbols!: Array<Symbols>;

  conversionForm: FormGroup = this.formBuilder.group({
    originCurrency: ['', Validators.required],
    finalCurrency: ['', Validators.required],
    amount: ['', Validators.required]
  })

  constructor(
    private service: ExchangeRateApiService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.service.getSymbols().subscribe((data) => {
      this.symbols = Object.values(data.symbols);
    })
  }

  handleSubmit() {
    console.log(this.conversionForm.value);
  }
}
