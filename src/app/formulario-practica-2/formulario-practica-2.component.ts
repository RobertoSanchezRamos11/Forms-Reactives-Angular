import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-practica-2',
  templateUrl: './formulario-practica-2.component.html',
  styleUrls: ['./formulario-practica-2.component.css']
})
export class FormularioPractica2Component {


  constructor(private fb: FormBuilder){}

  get name() {
    return this.formUser.get('name') as FormControl
  }

  get lastname() {
    return this.formUser.get('lastname') as FormControl
  }

  get email() {
    return this.formUser.get('email') as FormControl
  }

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'lastname': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'message': ['']
  })


  enviar(){
    console.log(this.formUser.value)

    if (this.formUser.invalid) {
      Swal.fire('Error', 'Verifique el formulario', 'error')
    } else {
      Swal.fire('Success', 'Se envio el formulario con exito', 'success')
      this.formUser.reset()
    }
  }

}
