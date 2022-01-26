import { Component, OnInit } from '@angular/core';
import { MutualFundsService } from '../mutual-funds.service';
import { MutualFund } from './mutual-fund.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private mutualFundService: MutualFundsService) { }

  mutualFunds:MutualFund[] = [];

  ngOnInit(): void {
    this.mutualFundService.getMutualFunds().subscribe(payload => {
      this.mutualFunds = payload;
    })
  }
}

