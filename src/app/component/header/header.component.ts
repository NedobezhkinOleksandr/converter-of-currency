import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Currency } from 'src/app/type/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnChanges {
  @Input() exchangeRates!: Currency[];
  usdRate?: number;
  euroRate?: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['exchangeRates']) {
      this.updateRates();
    }
  }

  private updateRates() {
    this.usdRate = this.exchangeRates.find((currency) => currency.cc === 'USD')?.rate;
    this.euroRate = this.exchangeRates.find((currency) => currency.cc === 'EUR')?.rate;
  }
}
