import {Adress} from "../entities/adress";

export interface IAdressRepository{
  registerAdress(adress:Adress):Promise<string>;
  
}