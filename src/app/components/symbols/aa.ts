// import { Symbols } from '../../models/symbols';
// import { ExchangeRateApiService } from '../../services/exchange-rate-api.service';
// import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-symbols',
//   templateUrl: './symbols.component.html',
//   styleUrls: ['./symbols.component.css']
// })
// export class SymbolsComponent implements AfterViewInit, OnInit {
//   symbolsList: Symbols[] = [];

//   dataSource: MatTableDataSource<Symbols>;

//   displayedColumns: string[] = ['simbolo', 'descricao'];

//   @ViewChild(MatPaginator)  paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private exchangeRateApiService: ExchangeRateApiService
//   ) { this.dataSource = new MatTableDataSource(this.symbolsList) }

//   ngOnInit(): void {
//     this.exchangeRateApiService.getSymbols().subscribe({
//       next: (res) => this.symbolsList = Object.values(res.symbols),
//       error: (err) => console.log(err)
//       }
//     )
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }
