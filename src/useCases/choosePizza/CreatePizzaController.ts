import { Request, Response } from "express";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";

export class CreatePizzaController{
  constructor(
    private createPizzaUseCase: CreatePizzaUseCase,

  ){}
  async handleChoosePizza(req:Request, res:Response){
    const{userName,size,flavors,frete} = req.body;
    try{
      await this.createPizzaUseCase.transferPizzaData({
        userName,
        size,
        flavors,
        frete
      })
      return res.status(201).send();
    }catch(err){
      return res.status(400).json({
        message:err.message | "Failed to choose pizza."
      });
    }
  }
}