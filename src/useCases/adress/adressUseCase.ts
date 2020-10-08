import { Adress } from "../../entities/adress";
import { IAdressRepository } from "../../repositories/IAdressRepository";

export class AdressUseCase{
  constructor(
    private adressRepository:IAdressRepository
  ){}
  async Adress(adress:Adress){
    const adressAssing = await this.adressRepository.registerAdress(adress)
    if(adressAssing=="error"){
      throw new Error("Falha ao adicionar localização")
    }else{
      console.log("Localização adicionada com sucesso");
      
    }
  }
}