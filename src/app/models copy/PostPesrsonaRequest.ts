export interface BodyPersona{
  name: String;
  phoneNumber: number;
  email: String;
  tipoRoll: number;
  activo: number;
  address: BodyAddress;
  profesor: BodyProfesor;
  estudiante: BodyEstudiante;
}

export interface BodyAddress{
  street: String;
  city: String;
  state: String;
  postalCode: number;
  country: String;
}

export interface BodyProfesor{
  salario: number;
}

export interface BodyEstudiante{
  codigoEstudiante: number;
  promedio: number;
}
