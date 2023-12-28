import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  persona = {
    nombre: '',
    edad: ''
  }

  procesar() {
    console.log(this.persona)
  }

  ngOnInit(): void {
    
  }
}
