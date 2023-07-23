import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../type/currency';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(
    private http: HttpClient,
  ) {}

  getExchangeRates() {
    return this.http.get<Currency[]>(this.API_URL);
  }
}
