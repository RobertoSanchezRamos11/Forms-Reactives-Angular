import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-practica',
  templateUrl: './formulario-practica.component.html',
  styleUrls: ['./formulario-practica.component.css']
})
export class FormularioPracticaComponent {


  constructor(private fb : FormBuilder){}

  get name(){
    return this.formUser.get('name') as FormControl
  }

  get surname(){
    return this.formUser.get('surname') as FormControl
  }

  get email(){
    return this.formUser.get('email') as FormControl
  }

  get celphone(){
    return this.formUser.get('celphone') as FormControl
  }

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'surname': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'celphone': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
  })

  procesar(){
    console.log(this.formUser.value)

    this.formUser.reset()
  }

}
