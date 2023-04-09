import { Component, OnInit } from '@angular/core';
import { BootstrapNotifyBarService } from 'src/app/services/bootstrap-notify.service';
import { TarjetaService } from '../../../services/tarjeta.service';

@Component({
  selector: 'app-list-tarajeta-credito',
  templateUrl: './list-tarajeta-credito.component.html',
  styleUrls: ['./list-tarajeta-credito.component.css']
})
export class ListTarajetaCreditoComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService,
    private bootstrapNotifyBarService: BootstrapNotifyBarService,) { }

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjeta();
    this.tarjetaService.obtenerTarjeta1();
    console.log("datos extrai1", this.tarjetaService.obtenerTarjeta1());
    console.log("datos extra0", this.tarjetaService.obtenerTarjeta());
  }
  eliminarTarjeta(id: number){
   if(confirm('Esta seguro de eliminar el registro')){
    this.tarjetaService.eliminarTarjeta(id).subscribe(data => {
      this.bootstrapNotifyBarService.notifyDanger('Registro eliminado correctamente.');
      this.tarjetaService.obtenerTarjeta();
    })
   }
  }
  editar(tarjeta: any){
    this.tarjetaService.actualizar(tarjeta);

  }
}
