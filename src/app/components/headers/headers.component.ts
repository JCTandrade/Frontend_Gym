import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogout() {
    // Borra el token de autenticación del almacenamiento local
    localStorage.removeItem('authToken');

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
