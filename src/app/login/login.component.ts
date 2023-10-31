import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { validarUsuario } from '../interfaces/validarUsuarioDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  datosCorrectos: boolean = true;
  
  @Output() isLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(private loginService: AuthServiceService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.validarUsuario();
  }

  validarUsuario() {
    const datos: validarUsuario = {
      correo: this.email,
      password: this.password
    };
    
    this.loginService.validarDatosUsuario(datos).subscribe(data => {
      const login =typeof(data.mensaje);
      
      if (login != 'string') {
        this.datosCorrectos =true;
        this.isLogin.emit(true);
        this.router.navigate(['/home']);
      } else {
        this.datosCorrectos =false;
        this.isLogin.emit(false);
        this.router.navigate(['/']);
      }
    })
  }
}
