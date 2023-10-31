import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  formularioPrecios: FormGroup;

  constructor(private fb: FormBuilder){
    this.formularioPrecios = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempoDuracion: ['', Validators.required]  
    }) 
  }
  
  ngOnInit(): void {

  }

  agregar(){
    console.log(this.formularioPrecios.value)
  }
}
