import { Component, OnInit } from '@angular/core';
import { Conversion } from 'src/app/models/conversion';
import { DataSharerService } from 'src/app/services/data-sharer.service';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css']
})
export class ConversionHistoryComponent implements OnInit {
  conversionHistory!: Array<Conversion>;

  constructor(private dataSharer: DataSharerService) { }

  ngOnInit(): void {
    this.dataSharer.share.subscribe(x => this.conversionHistory = x);
  }

  handleDelete(id: string): void {
    this.dataSharer.deleteItem(id);
  }

}
