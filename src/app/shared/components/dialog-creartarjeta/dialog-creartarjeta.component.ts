import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  titulo: string;
  mensaje: string;
}

@Component({
  selector: 'app-dialog-creartarjeta',
  templateUrl: './dialog-creartarjeta.component.html',
  styleUrls: ['./dialog-creartarjeta.component.css']
})
export class DialogCreartarjetaComponent implements OnInit {
  [x: string]: any;

  constructor(
    public dialogo: MatDialogRef<DialogCreartarjetaComponent>,
  ) {

   }

  ngOnInit(): void {
  }

  cerrarDialogo(): void {
    this.dialogo.close(false);

  }
}
