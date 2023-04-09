import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSnackBarConfig } from '@angular/material/snack-bar';
// var $ = require("jquery");
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class BootstrapNotifyBarService {
  from: string  = 'bottom';
  align: any='right';

  //create an instance of MatSnackBar
  // private configSuccess: MatSnackBarConfig = {
  //   panelClass: "success-dialog",
  //   duration: 5000,
  //   horizontalPosition: "end",
  //   verticalPosition: "bottom",
  // };
  // private configWarning: MatSnackBarConfig = {
  //   panelClass: "warning-dialog",
  //   duration: 5000,
  //   horizontalPosition: "end",
  //   verticalPosition: "bottom",
  // };
  //
  // private configDander: MatSnackBarConfig = {
  //   panelClass: "danger-dialog",
  //   duration: 5000,
  //   horizontalPosition: "end",
  //   verticalPosition: "bottom",
  // };
  constructor(private matSnackBar: MatSnackBar) { }

  /* It takes three parameters
      1.the message string
      2.the action
      3.the duration, alignment, etc. */
  public notifySuccess(message: any) {
    $.notify({
      icon: 'notifications',
      //message: 'Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer.'
      message: message
    }, {
      type:  'success',
      timer: 2000,
      placement: {
        from: this.from,
        align: this.align
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  public notifyWarning(message: any) {
    $.notify({
      icon: 'notifications',
      message: message,
      success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
    }, {
      type:  'warning',
      timer: 3000,
      placement: {
        from: this.from,
        align: this.align
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  public notifyDanger(message: any) {
    $.notify({
      icon: 'notifications',
      message: message
    }, {
      type:  'danger',
      timer: 3000,
      placement: {
        from: this.from,
        align: this.align
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
}
