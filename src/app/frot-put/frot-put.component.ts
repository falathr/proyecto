import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BodysPersona } from '../models/PutPersonaRequest';
import { AgregarPersonaService } from '../services/agregarPersonaService';
import Swal from 'sweetalert2';
import { regex } from '../const/coreConst';
import { FrontGetComponent } from '../front-get/front-get.component';

@Component({
  selector: 'app-frot-put',
  templateUrl: './frot-put.component.html',
  styleUrls: ['./frot-put.component.scss']
})
export class FrotPutComponent implements OnInit{

  public regex = regex;
  public capturarRol: any = '';
  public modificarPersona: FormGroup = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.pattern(this.regex.validarLetras)]),
    telefono: new FormControl(null, [Validators.required, Validators.pattern(this.regex.validarNumeros)]),
    email: new FormControl(null, [Validators.email, Validators.required])
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _agregarPersona: AgregarPersonaService,
    private _dialogRef: MatDialogRef<FrotPutComponent>,
    private dialog: MatDialog,
  ){
    this.capturarRol = data;
    this.modificarPersona.patchValue({nombre: this.capturarRol.nombre});
    this.modificarPersona.patchValue({telefono: this.capturarRol.tel});
    this.modificarPersona.patchValue({email: this.capturarRol.email});
  }

  ngOnInit(): void {

  }

  modificarPersonona(){
    let persona: BodysPersona = {
      name: this.modificarPersona.get('nombre')?.value != null ? this.modificarPersona.get('nombre')?.value : this.capturarRol.nombre,
      phoneNumber: this.modificarPersona.get('telefono')?.value != null ? this.modificarPersona.get('telefono')?.value : this.capturarRol.tel,
      email: this.modificarPersona.get('email')?.value != null ? this.modificarPersona.get('email')?.value : this.capturarRol.email
    }
    this._agregarPersona.ActualizarPersona(this.capturarRol.id, persona).subscribe({
      next:(response)=>{
        if(response){

              Swal.fire('Guardado!', '', 'success');
              this.dialog.closeAll();
        }
      },
      error:(error)=>{
        console.log(error);
      }

    });

  }

  get pNombre() { return this.modificarPersona.get('nombre'); }
  get telefono() { return this.modificarPersona.get('telefono'); }
  get email() { return this.modificarPersona.get('email'); }

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
