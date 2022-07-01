import { Component, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Conversion } from 'src/app/models/conversion';
import { DataSharerService } from 'src/app/services/data-sharer.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

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

  // dialog props


  constructor(
    private dataSharer: DataSharerService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
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
    this.dataSource = new MatTableDataSource(this.conversionHistory);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(id: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
