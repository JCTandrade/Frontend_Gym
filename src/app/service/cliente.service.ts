import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/constante';
import { Observable, catchError, throwError, map } from 'rxjs';
import { IRegistrarCliente } from '../interfaces/validarClienteDto';
import { ResponseBackend } from '../interfaces/responseBackendDto';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  constructor(private http: HttpClient) { }


  registrarCliente(datos: IRegistrarCliente): Observable<ResponseBackend> {
    return this.http.post<ResponseBackend>(`${environment.apiUrl}/cliente/registrar-cliente`,datos);
  }

  getlistarClientes(): Observable<ResponseBackend> {
    return this.http.get<ResponseBackend>(`${environment.apiUrl}/cliente/listar-cliente`);
  }

  enviarFormulario(data: IRegistrarCliente) {
    return this.http
      .post<ResponseBackend>(`${environment.apiUrl}/cliente/registrar-cliente`, data)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => {
          if (error.error.descripcionRespuesta != null) {
            return throwError(() => error.error.descripcionRespuesta);
          } else {
            return throwError(() => 'El servidor no ha respondido');
          }
        })
      );
  }

  obtenerClientePorId(idCliente: string) {
    return this.http.get<ResponseBackend>(`${environment.apiUrl}/clientes/${idCliente}`);
  }
}
