import { Response } from "express";
import { Request } from "express";
import { db } from "../../database/connection";

export class IndexUsers{
  async index(req:Request,res:Response){
    try{const usersDB = await db('users');
     res.status(201).json(usersDB);}
     catch{res.status(400).send()}

  }
}