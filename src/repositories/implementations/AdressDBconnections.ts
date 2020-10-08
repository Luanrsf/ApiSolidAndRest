import { db } from "../../database/connection";
import { Adress } from "../../entities/adress";
import { IAdressRepository } from "../IAdressRepository";

export class AdressDBconnections implements IAdressRepository{ 
  
  async registerAdress(adress:Adress){
    try{ 
      await db('adress').insert(adress);
      console.log("Loc adicionada")
      return adress.id;

  }catch{
    const erro ="error"
    return erro

  }
  }
}