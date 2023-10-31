import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit{
  formularioCliente: FormGroup;
tipoIdentificacion: any;

  constructor(private fb: FormBuilder) {
    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      imgUrl: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    // Este es el método que se llama cuando se hace clic en el botón "Agregar".
    // Puedes agregar aquí la lógica para guardar los datos del cliente, por ejemplo, haciendo una solicitud HTTP al servidor.
    // Ejemplo:
    // this.httpClient.post('url_del_servidor', this.formularioCliente.value).subscribe(response => {
    //   // Procesar la respuesta
    // });
    console.log(this.formularioCliente.value)
  }
}
