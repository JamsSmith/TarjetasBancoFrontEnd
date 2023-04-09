import { Component, Inject, OnInit,Input, OnDestroy } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BootstrapNotifyBarService } from "src/app/services/bootstrap-notify.service";
import { TarjetaService } from "src/app/services/tarjeta.service";
import { modelogin } from '../../models/login';
import { Loginservice } from '../../services/login.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   form: FormGroup;
  public Email = "";
  public password = "";

  constructor(
              private formBuilder: FormBuilder,
              private tarjetaservice:TarjetaService,
              private Loginservice:Loginservice,
              private bootstrapNotifyBarService: BootstrapNotifyBarService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public dialogo: MatDialog,
              private router: Router,
  ) {

    this.form = this.formBuilder.group({
      id: 0,
      Email:['',[Validators.required]],
      password:['',[Validators.required]],

    })
  }

  ngOnInit(): void {

  }

  login(): void{
    const Login: modelogin = {
      Email: this.form.get('Email')?.value,
      Password: this.form.get('password')?.value,
     }
     console.log(Login,'datos de login')
     this.Loginservice.login(Login).subscribe(data =>{
      if(data.Token != null && data.Token != '')
      {
        console.log('ingreso' );
        this.router.navigate(['/index/']);
        this.bootstrapNotifyBarService.notifySuccess('Los datos son correctos.');
      }
      else{
        this.bootstrapNotifyBarService.notifyDanger('Datos son incorrectos.');
      }
      // console.log(data, 'datos de login2');
       this.tarjetaservice.obtenerTarjeta();
     });

  }

}
