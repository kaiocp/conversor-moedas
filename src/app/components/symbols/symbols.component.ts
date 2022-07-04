import { Symbols } from '../../models/symbols';
import { ExchangeRateApiService } from '../../services/exchange-rate-api.service';
import { Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
  displayedColumns: string[] = ['code', 'description'];
  dataSource!: MatTableDataSource<Symbols>;
  symbolsList!: Array<Symbols>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private exchangeRateApiService: ExchangeRateApiService) {}

  ngOnInit() {
    this.exchangeRateApiService.getSymbols().subscribe((data) => {
      this.symbolsList = Object.values(data.symbols);
      this.dataSource = new MatTableDataSource(this.symbolsList);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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
