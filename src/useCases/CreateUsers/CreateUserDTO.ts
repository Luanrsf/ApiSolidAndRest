export interface ICreateUserRequestDTO{
  name:string;
  email:string;
  password:string;
  telNumber:string;
  pedidosCount?:number;
  adress?:string;
}
export interface ILoginUserRequestDTO{
  email:string;
  password:string
}