import {IAdressDTO} from "../useCases/adress/adressDTO";

export class Adress{
  public id:string
  public street:string
  public streetNumber: number
  public cep : string
  public complemento:string
  public frete?:number

  constructor(props:IAdressDTO){
    Object.assign(this,props);
  }
}