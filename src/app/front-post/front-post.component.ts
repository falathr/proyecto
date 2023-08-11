import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BodyAddress, BodyEstudiante, BodyPersona, BodyProfesor } from '../models/PostPesrsonaRequest';
import { AgregarPersonaService } from '../services/agregarPersonaService';
import Swal from 'sweetalert2';
import { regex } from '../const/coreConst';

@Component({
  selector: 'app-front-post',
  templateUrl: './front-post.component.html',
  styleUrls: ['./front-post.component.scss']
})
export class FrontPostComponent implements OnInit {

  public regex = regex;
  public agregarPersona: FormGroup = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.pattern(this.regex.validarLetras)]),
    telefono: new FormControl(null, [Validators.required, Validators.pattern(this.regex.validarNumeros)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    street: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    postalCode: new FormControl(null),
    country: new FormControl(null),
    salario: new FormControl(null),
    codigoEstudiante: new FormControl(null),
    promedio: new FormControl(null)
  })
  public capturarRol: any = '';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _agregarPersona: AgregarPersonaService,
    private _dialogRef: MatDialogRef<FrontPostComponent>
  ) {
    this.capturarRol = data;
  }

  ngOnInit(): void {

  }

  //Agrega la nueva persona
  agregarPersonaPost(){
    let addres: BodyAddress={
      street: this.agregarPersona.get('street')?.value,
      city: this.agregarPersona.get('city')?.value,
      state: this.agregarPersona.get('state')?.value,
      postalCode: Number(this.agregarPersona.get('postalCode')?.value) ,
      country: this.agregarPersona.get('country')?.value
    }

    let profesor: BodyProfesor={
      salario: Number(this.agregarPersona.get('salario')?.value !=0 ? this.agregarPersona.get('salario')?.value : null)
    }

    let estudiante: BodyEstudiante={
      codigoEstudiante: Number(this.agregarPersona.get('codigoEstudiante')?.value != 0 ? this.agregarPersona.get('codigoEstudiante')?.value :null),
      promedio: Number(this.agregarPersona.get('codigoEstudiante')?.value != 0 ? this.agregarPersona.get('codigoEstudiante')?.value:null)
    }

    let bodyAgregar: BodyPersona={
      name: this.agregarPersona.get('nombre')?.value,
      phoneNumber: Number(this.agregarPersona.get('telefono')?.value),
      email: this.agregarPersona.get('email')?.value,
      tipoRoll: this.capturarRol.roll,
      activo: 1,
      address: addres,
      profesor: profesor,
      estudiante: estudiante
    }
    this._agregarPersona.adicionarPersona(bodyAgregar).subscribe({
      next:(response)=>{
        if(response){
              Swal.fire('Guardado!', '', 'success');
              this._dialogRef.close();
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })

  }

  //Valida los campos
  get pNombre() { return this.agregarPersona.get('nombre'); }
  get telefono() { return this.agregarPersona.get('telefono'); }
  get email() { return this.agregarPersona.get('email'); }

  //Los mensajes de alerta
  alert() {
    const alerts = {
      required: {
        message: 'Obligatorio'
      },
      email: {
        message: 'Email no valido'
      },
      patterN: {
        message: 'invalido'
      },
      patterL: {
        message: 'invalido'
      }

    }
    return alerts;
  }
}
