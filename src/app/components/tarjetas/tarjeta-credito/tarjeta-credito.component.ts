import { Component, Inject, OnInit,Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarjetaService } from '../../../services/tarjeta.service';
import { TarjetaCredito } from 'src/app/models/tarjetaCredito';
import { BootstrapNotifyBarService } from 'src/app/services/bootstrap-notify.service';
import { DialogCreartarjetaComponent } from 'src/app/shared/components/dialog-creartarjeta/dialog-creartarjeta.component';
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public suscripton:any = Subscription;
  public tarjeta: any;
  public idtarjeta: number = 0;
  public idtarjetag: number = 0;
  public date: Date = new Date();
  public fechaActual = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
  constructor(private formBuilder: FormBuilder,
              private tarjetaservice:TarjetaService,
              private bootstrapNotifyBarService: BootstrapNotifyBarService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public dialogo: MatDialog,) {
    this.form = this.formBuilder.group({
      id: 0,
      titular:['',[Validators.required]],
      numeroTarjeta:['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion:['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      CVV:['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
   }

  ngOnInit(): void {
   this.suscripton = this.tarjetaservice.obtenerTarjeta$().subscribe(data => {
      console.log('Data para editar',data);
      this.tarjeta = data;
      this.form.patchValue({
        titular: this.tarjeta.titular,
        numeroTarjeta: this.tarjeta.numeroTarjeta,
        fechaExpiracion: this.tarjeta.fechaExpiracion,
        CVV: this.tarjeta.cvv,
      });
      this.idtarjeta = this.tarjeta.id;
     // console.log('idselect',this.idtarjeta);
    });

  }
  ngOnDestroy(): void {
      this.suscripton.unsubscribe();
  }
  guardartarjeta(){

  if(this.idtarjeta == 0 || this.idtarjeta ==null){
    this.agregar();
  } else{
    this.editar();
  }

  }
 /* guardartarjeta(){
    this.dialog.open(DialogCreartarjetaComponent, {
      maxWidth: '250vw',
      maxHeight: 'auto',
      height: 'auto',
      width: '40%',
      disableClose: true,
      data: {
        titulo: `Advertencia`,
        //id:id,
      }

    })
      .afterClosed()
  }*/

  agregar(){
    const tarjeta: TarjetaCredito = {

      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      CVV: this.form.get('CVV')?.value,
     }
     this.tarjetaservice.guardarTarjeta(tarjeta).subscribe(data =>{
      // console.log('Guardado exitosamente');
       this.form.reset();
       this.bootstrapNotifyBarService.notifySuccess('Los datos se guardaron correctamente.');
       this.tarjetaservice.obtenerTarjeta();
     });
  }

  editar(){
    const tarjeta: TarjetaCredito = {
      id: this.tarjeta.id,
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      CVV: this.form.get('CVV')?.value,
     };
     console.log('id-editar',tarjeta );
     this.tarjetaservice.actualizarTarjeta(this.idtarjeta, tarjeta).subscribe(data =>{
      this.bootstrapNotifyBarService.notifyWarning('Los datos se editaron correctamente');
      this.tarjetaservice.obtenerTarjeta();
      this.form.reset();
      this.idtarjeta = 0;
      console.log('id-editarf',this.idtarjeta );
     });

  }

}
