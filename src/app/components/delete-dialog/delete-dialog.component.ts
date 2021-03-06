import { DataSharerService } from 'src/app/services/data-sharer.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  template: `
  <h2 mat-dialog-title>Excluir conversão?</h2>
  <div mat-dialog-actions class="d-flex justify-content-between">
    <button mat-button (click)="closeDialog()">Cancelar</button>
    <button mat-raised-button color="warn" (click)="handleDelete()">Excluir</button>
  </div>
  `
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dataSharer: DataSharerService,
    ) {}

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  handleDelete() {
    this.dataSharer.deleteItem(this.data);
    this.closeDialog();
  }

}
