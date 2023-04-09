import { modelogin } from './../models/login';
import { LoginComponent } from './../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';


const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  }),
};

@Injectable({
  providedIn: 'root'
})

export class Loginservice{
 private Apisegurity : string = environment.apilogin;
 public list:any = [];
 constructor(private http: HttpClient) { }

 login(login: any):Observable<any>{
  return this.http.post(this.Apisegurity, login );
}


}
