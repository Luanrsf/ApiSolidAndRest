import { db } from "../../database/connection";
import { IPizzaDTO } from "../../useCases/Order/IPizzaDTO";
import { IPizzaRepository } from "../IPizzaRepository";
import {Pizza} from "../../entities/Pizza"

export class DBPizzaRepository implements IPizzaRepository{
  async choosePizza(pizza:IPizzaDTO):Promise<Pizza>{
    const{userName,size,flavors,frete} = pizza;
    try{
      await db("pizza").insert({
        userName,
        size,
        flavors,
        frete
      })
      return pizza;
    }catch{
      return pizza;
      
    }
  }
}