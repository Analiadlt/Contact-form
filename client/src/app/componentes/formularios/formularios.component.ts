import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  // construccion del formulario reactivo
  f: FormGroup

  // inyección de dependencias en Angular
  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')        
      ])],
      mensaje: ['', Validators.required],
      telefono: "",
      pais: ""
    })
  }

  enviarRf() {
      console.log(this.f.value)

      // limpiar el formulario
      this.f.reset()
  }
}
