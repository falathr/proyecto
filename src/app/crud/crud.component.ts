import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FrontPostComponent } from '../front-post/front-post.component';
import { FrontGetComponent } from '../front-get/front-get.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public capturarRol: any = '';
  public roll: Number= 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.capturarRol = data;
  }
  ngOnInit(): void {
  }

  //llama ventana agregar Persona
  agregarPersona() {
    this.roll = this.capturarRol.roll;
    this.dialog.open(FrontPostComponent, {
      minWidth: '400px',
      data: {
        roll: this.roll
      },
      disableClose: true
    });
  }
  //llama ventana obtener persona
  obtenerPersona() {
    this.roll = this.capturarRol.roll;
    this.dialog.open(FrontGetComponent, {
      minWidth: '500px',
      disableClose: true
    });
  }
}
