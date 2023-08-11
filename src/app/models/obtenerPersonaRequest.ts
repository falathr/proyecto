export class ObtenerPersona {
  constructor(
    public id: number,
    public name: String ="",
    public phoneNumber: number,
    public email: String,
    public tipoRoll: number,
    public activo: number,
    public addres: ObtenerAddress[],
    public profesor: ObtenerProfesor,
    public estudiante: ObtenerEstudiante
  ) { }
}

export class ObtenerAddress {
  constructor(
    public id: number,
    public street: String,
    public city: String,
    public state: String,
    public postal_code: number,
    public country: String
  ) { }
}

export class ObtenerProfesor {
  constructor(
    public id: number,
    public salario: number
  ){}
}

export class ObtenerEstudiante{
  constructor(
    public id: number,
    public codigoEstudiante: number,
    public promedio: number,
  ){}
}
