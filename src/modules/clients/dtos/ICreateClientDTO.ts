export interface ICreateClientDTO {
  id?: string;
  login: string;
  password: string;
  name: string;
  address: string;
  birth_date: Date;
  cpf: string;
}
