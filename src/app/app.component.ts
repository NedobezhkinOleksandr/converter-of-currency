import { Component, OnInit } from '@angular/core';
import { Currency } from './type/currency';
import { CurrencyService } from './service/currency-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  rate!: Currency;
  currency!: Currency;
  exchangeRates: Currency[] = [];
  currentDate: string | null = '';

  constructor(
    private currencyService: CurrencyService,
    private datePipe: DatePipe
  ) {
    this.currencyService.getExchangeRates().subscribe((data: Currency[]) => {
      this.exchangeRates = data;
    });
  }

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data: Currency[]) => {
      this.exchangeRates = data;

      const uahExists = this.exchangeRates.some((currency) => currency.cc === 'UAH');

      if (!uahExists) {
        const uahCurrency: Currency = {
          cc: 'UAH',
          r030: Date.now(),
          rate: 1,
          txt: 'Українська гривня',
          exchangedate: Date.now().toString(),
        };

        this.exchangeRates.push(uahCurrency);
      }
    });

    this.currentDate = this.datePipe.transform(new Date(), 'dd.MM.yyyy');
  }
}
