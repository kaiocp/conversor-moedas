import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Conversion } from 'src/app/models/conversion';
import { DataSharerService } from 'src/app/services/data-sharer.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css']
})
export class ConversionHistoryComponent implements AfterViewInit {
  conversionHistory!: Array<Conversion>;

  // table props
  displayedColumns: string[] = ['data', 'date', 'valor_informado', 'moeda_sel', 'moeda_con', 'result', 'taxa', 'excluir'];
  dataSource!: MatTableDataSource<Conversion>;

  constructor(
    private dataSharer: DataSharerService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }


  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSharer.share.subscribe((data) => {
      this.conversionHistory = data
      this.dataSource = new MatTableDataSource(this.conversionHistory);
      this.dataSource.sort = this.sort;
    });
  }

  handleDelete(id: string): void {
    this.dataSharer.deleteItem(id);
    this.dataSource = new MatTableDataSource(this.conversionHistory);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
