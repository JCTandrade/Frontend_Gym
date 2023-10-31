import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veterinariaFrondend';
  datoHijo: boolean = false;
  mensajeError: string = '';
  datosCorrectos: boolean = true;

  recibirDatoHijo(event: boolean): void {
    this.datoHijo = event;
  }

  recibirMensajeError(mensaje: string): void {
    this.mensajeError = mensaje;
  }
}
