import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent implements OnInit{

  public roll: Number = 0;
  constructor(
    private dialog: MatDialog){
  }

  ngOnInit(): void {
  }


  seleccionarRol(rol: Number) {
    this.roll = rol;
    this.dialog.open(CrudComponent, {
      minWidth: '50px',
      data: {
        roll: this.roll
      },
      disableClose: true
    });
  }
}
