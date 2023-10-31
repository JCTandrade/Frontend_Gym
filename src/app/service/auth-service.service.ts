import { Injectable } from '@angular/core';
import { environment } from '../core/constante';
import { HttpClient } from '@angular/common/http';
import { validarUsuario } from '../interfaces/validarUsuarioDto';
import { ResponseBackend } from '../interfaces/responseBackendDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  //isLoggedIn: any;
  private isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient) { }

  isLoggedInUser(): boolean {
    // Aquí debes implementar la lógica para verificar si el usuario está autenticado.
    // Por ejemplo, si tienes una variable que indica si el usuario ha iniciado sesión, puedes devolverla aquí.
    // Ejemplo:
    return this.isLoggedIn;
  }
  
  validarDatosUsuario(datos: validarUsuario): Observable<ResponseBackend> {
    return this.http.post<ResponseBackend>(`${environment.apiUrl}/usuario/validar-usuario`,datos);
  }
  
}
