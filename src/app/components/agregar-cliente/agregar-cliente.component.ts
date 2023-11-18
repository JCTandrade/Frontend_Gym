import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseBackend } from 'src/app/interfaces/responseBackendDto';
import { IRegistrarCliente } from 'src/app/interfaces/validarClienteDto';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
})
export class AgregarClienteComponent implements OnInit {
  clientes: IRegistrarCliente | undefined;
  formularioCliente: FormGroup;
  tipoIdentificacion: any;
  selectedImageBase64: string = '';
  imagenCargada: boolean = false;
  respuestaBackend: ResponseBackend | undefined;

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private activeRoute: ActivatedRoute) {
    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      imgUrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    const idCliente = this.activeRoute.snapshot.params['id_cliente'];
    if (idCliente) {
      this.obtenerClientePorId(idCliente);
    }
  }

  obtenerClientePorId(idCliente: string) {
    this.clienteService.obtenerClientePorId(idCliente).subscribe(data =>{
      this.clientes = data.mensaje;
      console.log(this.clientes);

      if(this.clientes) {
        this.llenarFormularioConDatos(this.clientes);
      }
    });
  }

  llenarFormularioConDatos(cliente: IRegistrarCliente) {
    this.formularioCliente.patchValue({
      nombre: cliente.clienteNombre,
      apellido: cliente.clienteApellido,
      correo: cliente.clienteCorreo,
      tipoIdentificacion: cliente.clienteTipoIdentificacion,
      numeroIdentificacion: cliente.clienteNumeroIdentificacion,
      fechaNacimiento: cliente.clienteFechaNacimiento,
      telefono: cliente.clienteTelefono,
      imgUrl: this.formularioCliente.get('imgUrl') || cliente.clienteFoto,
    });
    this.imagenCargada = true;
    this.selectedImageBase64 = cliente.clienteFoto;
  }

  agregar() {
    if (this.imagenCargada) {
      const cliente: IRegistrarCliente = {
        clienteNombre: this.formularioCliente.value.nombre,
        clienteApellido: this.formularioCliente.value.apellido,
        clienteCorreo: this.formularioCliente.value.correo,
        clienteTipoIdentificacion: this.formularioCliente.value.tipoIdentificacion,
        clienteNumeroIdentificacion: this.formularioCliente.value.numeroIdentificacion,
        clienteFechaNacimiento: this.formularioCliente.value.fechaNacimiento,
        clienteTelefono: this.formularioCliente.value.telefono,
        clienteFoto: this.selectedImageBase64,
      };
      console.log(cliente);

      this.clienteService.enviarFormulario(cliente).subscribe({
        next: data => {
          
          this.respuestaBackend = data;
          console.log('Respuesta backedn',typeof data.mensaje);
          if(typeof data.mensaje === 'string' ){
            Swal.fire(
              'Error',
              'El cliente ya existe',
              'error'
            );
          }else{
            Swal.fire(
              'Registro Exitoso',
              'haz clic en OK para continuar!',
              'success'
            )
          }
            
        },
        error: errorMsg => {
          alert(errorMsg);
        },
      });

    } else {
      alert('La imagen en Base64 no está disponible.');
    }
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result;
        const parts = base64String.split(";base64,");
        if (parts.length === 2) {
          this.selectedImageBase64 = parts[1];
          this.imagenCargada = true;
        } else {
          console.error('El formato de la imagen no es válido.');
        }
      };
      reader.readAsDataURL(file);
    }
  }

}
function showAlert(mensaje: any) {
  throw new Error('Function not implemented.');
}

