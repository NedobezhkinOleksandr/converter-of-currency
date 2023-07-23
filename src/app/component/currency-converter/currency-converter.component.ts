// currency-converter.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from 'src/app/type/currency';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent {
  @Input() exchangeRates!: Currency[];
  @Input() rate!: Currency;
  @Input() currency!: Currency;
  @Output() rateChange = new EventEmitter<Currency>();
  @Output() currencyChange = new EventEmitter<Currency>();

  
  currency1: string = 'USD';
  currency2: string = 'UAH';
  amount1: number = 0;
  amount2: number = 0;

  getCurrencyName(cc: string): string {
    const selectedCurrency = this.exchangeRates.find(currency => currency.cc === cc);
    return selectedCurrency ? selectedCurrency.txt : '';
  }

  isAmountValid(amount: string | number): boolean {
    return !isNaN(+amount);
  }

  convertCurrency(fromFirstInput: boolean) {
    const currency1Rate = this.exchangeRates.find((currency) => currency.cc === this.currency1)?.rate || 1;
    const currency2Rate = this.exchangeRates.find((currency) => currency.cc === this.currency2)?.rate || 1;

    if (fromFirstInput) {
      this.amount2 = this.amount1 * (currency1Rate / currency2Rate);
    } else {
      this.amount1 = this.amount2 * (currency2Rate / currency1Rate);
    }
    
  }
}
