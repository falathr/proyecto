import { Component, OnInit } from '@angular/core';
import { AgregarPersonaService } from '../services/agregarPersonaService';
import { ObtenerPersona } from '../models/obtenerPersonaRequest';
import { IllenarTabla, llenarAddress } from '../models/llenarTabla';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FrotPutComponent } from '../frot-put/frot-put.component';


@Component({
  selector: 'app-front-get',
  templateUrl: './front-get.component.html',
  styleUrls: ['./front-get.component.scss']
})
export class FrontGetComponent implements OnInit {
  public personas: Array<IllenarTabla> = [];
  public data!: IllenarTabla;
  constructor(
    private _getPersona: AgregarPersonaService,
    private _dialogRef: MatDialogRef<FrontGetComponent>,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this._getPersona.obtenerPersona().subscribe({
      next: (response: ObtenerPersona[]) => {
        //console.log(JSON.stringify(response))
        if (response != null) {
          response.forEach(element => {
            //console.log(JSON.stringify(element))
            let addres: llenarAddress[] = [];
            element.addres.forEach(element2 => {
              let addressD: llenarAddress = {
                direccion: element2.street,
                departamento: element2.state,
                codigoPostal: element2.postal_code.toString(),
                pais: element2.country,
                ciudad: element2.city
              }
              addres.push(addressD);
            });
            this.data = {
              id: element.id,
              nombre: element.name,
              telefono: Number(element.phoneNumber),
              email: element.email,
              address: addres
            }
            this.personas.push(this.data);
          });
        }
      }
    });
  }

  //Metodo borrar persona
  borrarPersona(id: number){
    this._getPersona.borrarPersona(id).subscribe({
      next: (response)=>{Swal.fire({
        icon: 'success',
        title: 'Guardado!',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#198754'
      }).then(() => {
        this._dialogRef.close();
      })},
      error: (error) => {console.log(error);}
    })
  }

  //llama ventana mmodificar persona y le pasa los datos
  modificarPersona(id: number, nombre: String, tel: number, email: String){
    this.dialog.open(FrotPutComponent, {
      minWidth: '400px',
      data: {
        id: id,
        nombre: nombre,
        tel: tel,
        email: email
      },
      disableClose: true,
      enterAnimationDuration: 500
    });
  }
}
