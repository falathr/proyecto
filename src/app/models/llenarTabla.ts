export interface IllenarTabla{
  id: number;
  nombre: String;
  telefono: number;
  email: String;
  address: llenarAddress[]
}

export interface llenarAddress{
  direccion: String;
  departamento: String;
  codigoPostal: String;
  pais: String;
  ciudad: String
}
