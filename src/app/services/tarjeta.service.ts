import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetaCredito';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myApiUrl: string = environment.myApiUrl;
  private myAppUrl: string = environment.myAppUrl;


  public list:any = [];
 /*actualizar datos del formulario */
 private actualizaformulario = new BehaviorSubject<TarjetaCredito>({} as any);

  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: TarjetaCredito):Observable<TarjetaCredito>{
    return this.http.post<TarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta );
  }

  eliminarTarjeta(id: number):Observable<TarjetaCredito>{
    return this.http.delete<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id);
  }
  obtenerTarjeta(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(data => {
      this.list = data;
    });
  }
  obtenerTarjeta1(): Observable<Response>{
    var urlobttarjeta = this.myApiUrl + this.myAppUrl;
    return this.http.get<Response>(urlobttarjeta, httpOption).pipe(map((data) =>{return this.list = data;

    }));
  }
  actualizar(tarjeta: any){
    this.actualizaformulario.next(tarjeta);
  }
  obtenerTarjeta$(): Observable<TarjetaCredito>{
   return this.actualizaformulario.asObservable();
  }
  actualizarTarjeta(id: number, tarjeta: TarjetaCredito): Observable<TarjetaCredito>{
    return this.http.put<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id, tarjeta);

  }
}
