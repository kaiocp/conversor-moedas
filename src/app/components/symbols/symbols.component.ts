import { Symbols } from '../../models/symbols';
import { ExchangeRateApiService } from '../../services/exchange-rate-api.service';
import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent {
  displayedColumns: string[] = ['simbolo', 'descricao'];
  dataSource!: MatTableDataSource<Symbols>;
  symbolsList: any;

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private exchangeRateApiService: ExchangeRateApiService) {
    this.exchangeRateApiService.getSymbols().subscribe((data) => {
      this.symbolsList = Object.values(data.symbols);
      this.dataSource = new MatTableDataSource(this.symbolsList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
