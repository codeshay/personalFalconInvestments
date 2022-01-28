import { Component, OnInit, ViewChild } from '@angular/core';
import { MutualFundsService } from '../mutual-funds.service';
import { MutualFund } from './mutual-fund.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) dataSource!: MatTableDataSource<MutualFund>;

  constructor(private mutualFundService: MutualFundsService) {}

  mutualFunds:MutualFund[] = [];

  ngOnInit(): void {
    this.mutualFundService.getMutualFunds().subscribe(payload => {
      // this.mutualFunds = payload;
      this.dataSource = new MatTableDataSource(payload);
      this.dataSource.paginator = this.paginator;
    })
  }

  columns = [
    {columnDef: 'fundName', header: 'Mutual Fund Name', cell: (element: any) => `${element.fundName}`},
    {columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}`},
    {columnDef: 'yTD', header: 'YTD', cell: (element: any) => `${element.yTD}`},
    {columnDef: 'yearOne', header: 'Year 1', cell: (element: any) => `${element.yearOne}`},
    {columnDef: 'yearThree', header: 'Year 3', cell: (element: any) => `${element.yearThree}`},
    {columnDef: 'yearTen', header: 'Year 10', cell: (element: any) => `${element.yearTen}`},
    {columnDef: 'inceptionDate', header: 'Inception Date', cell: (element: any) => `${element.inceptionDate}`},
    {columnDef: 'inceptionRate', header: 'Inception Rate', cell: (element: any) => `${element.inceptionRate}`},
    {columnDef: 'expenseRatio', header: 'Expense Ratio', cell: (element: any) => `${element.expenseRatio}`},
    {columnDef: 'nAV', header: 'NAV', cell: (element: any) => `${element.nAV}`},
    {columnDef: 'risk', header: 'Risk', cell: (element: any) => `${element.risk}`},
    {columnDef: 'minimum', header: 'Minimum', cell: (element: any) => `$ ${element.minimum}`},
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  // dataSource = this.mutualFunds;
}
