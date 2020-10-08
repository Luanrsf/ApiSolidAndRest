import { Request , Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ){}
  async handleLogin(req:Request,res:Response):Promise<Response>{
    const {email,password} = req.body;
    try{
      await this.createUserUseCase.login({email, password})
      return res.status(201).send("Login efetuado com sucesso");
    }
    catch(err){
      return res.status(400).send("Usuario ou senha nao encontrado")
    }

  }
  async handleRegister(req:Request,res:Response):Promise<Response>{
    const {name,email,password,telNumber} = req.body;
    try{
    await this.createUserUseCase.execute({
      name,
      email,
      password,
      telNumber
    })
    return res.status(201).send();
  }catch(err){
    return res.status(400).json({
      message:err.message || "Unexpect Error."
    })
  }
  }
 
}