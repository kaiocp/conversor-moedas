import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conversion } from 'src/app/models/conversion';
import { Symbols } from 'src/app/models/symbols';
import { DataSharerService } from 'src/app/services/data-sharer.service';
import { ExchangeRateApiService } from 'src/app/services/exchange-rate-api.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  symbols!: Array<Symbols>;
  conversion!: Conversion;

  conversionForm: FormGroup = this.formBuilder.group({
    originCurrency: ['', Validators.required],
    finalCurrency: ['', Validators.required],
    amount: ['', Validators.required]
  })

  constructor(
    private service: ExchangeRateApiService,
    private dataSharer: DataSharerService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.service.getSymbols().subscribe((data) => {
      this.symbols = Object.values(data.symbols);
    })

  }

  fetchData(from: string, to: string, amount: number, highAmount: any) {
    this.service.getConversion(from, to, amount).subscribe((data) => {
      this.conversion = {
        id: this.dataSharer.makeId(10),
        date: new Date,
        from_currency: from,
        from_amount: amount,
        to_currency: to,
        result: (data.result).toFixed(2),
        rate: (data.info.rate).toFixed(2),
        high: this.setHighAmount(highAmount)
        }
      this.dataSharer.addItem(this.conversion);
      }
    )
  }

  setHighAmount(amount: number): boolean {
    return amount > 10000;
  }

  handleSubmit() {
    if (this.conversionForm.value.originCurrency === 'USD') {
      this.fetchData(
        this.conversionForm.value.originCurrency,
        this.conversionForm.value.finalCurrency,
        (this.conversionForm.value.amount).toFixed(2),
        (this.conversionForm.value.amount).toFixed(2)
      );
      console.log(this.conversion);
    } else {
      this.service.getConversion(
        this.conversionForm.value.originCurrency,
        'USD',
        (this.conversionForm.value.amount).toFixed(2)
      ).subscribe((data) => {
        this.fetchData(
          this.conversionForm.value.originCurrency,
          this.conversionForm.value.finalCurrency,
          (this.conversionForm.value.amount).toFixed(2),
          (data.result).toFixed(2)
        );
      })
    }
  }

}
