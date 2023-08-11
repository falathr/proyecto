import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BodyPersona } from '../models/PostPesrsonaRequest';
import { BodysPersona } from '../models/PutPersonaRequest';
import { Observable } from 'rxjs';
import { ObtenerPersona } from '../models/obtenerPersonaRequest';

@Injectable({
  providedIn: 'root'
})
export class AgregarPersonaService {

  private url = 'http://localhost:8080' + '/personas';

  constructor(
    private _htpp: HttpClient,
  ) { }

  //metodo Post
  adicionarPersona(persona: BodyPersona): Observable<any> {

    return this._htpp.post(this.url, persona);
  }

  //Metodo get
  obtenerPersona(): Observable<ObtenerPersona[]>{
    return this._htpp.get<ObtenerPersona[]>(this.url)
  }

  //Metodo Delete
  borrarPersona(id:number){
    return this._htpp.delete(this.url+"/"+`${id}`)
  }
  //Metodo Put
  ActualizarPersona(id:number, persona: BodysPersona){
    return this._htpp.put(this.url+"/"+`${id}`, persona)
  }
}
