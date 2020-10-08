import { Request, Response } from "express";
import { AdressUseCase } from "./adressUseCase";

export class AdressController{
  constructor(
    private adressUseCase: AdressUseCase,
  ){}
  async handleAddAdress(req:Request,res:Response){
    const {id,street,streetNumber,cep,complemento} = req.body;
    try{
      await this.adressUseCase.Adress({id,street,streetNumber,cep,complemento})
      return res.status(201).send("Localização adicionada")

    }catch(err){
      return res.status(400).send("Falha ao cadastrar adress")

    }
    

  }
}