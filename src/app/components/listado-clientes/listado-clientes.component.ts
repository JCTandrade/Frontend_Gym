import { Component, OnInit } from '@angular/core';
import { IRegistrarCliente } from 'src/app/interfaces/validarClienteDto';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit{
  clientes: IRegistrarCliente[] = [];
  constructor(private clienteService: ClienteService ) {}

  ngOnInit() {
    this.listarCliente();
  }

  listarCliente () {
    this.clienteService.getlistarClientes().subscribe(data => {
      this.clientes = data.mensaje;
      console.log(this.clientes);
    });
  }

}
