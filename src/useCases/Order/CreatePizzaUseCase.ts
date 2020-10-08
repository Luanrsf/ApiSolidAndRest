
import {IPizzaRepository} from "../../repositories/IPizzaRepository";
import { IPizzaDTO } from "./IPizzaDTO";
import { Pizza } from "../../entities/Pizza";

export class CreatePizzaUseCase{
  constructor(
    private pizzaRepository :IPizzaRepository
  ){}
    async transferPizzaData(data:IPizzaDTO){
      await this.pizzaRepository.choosePizza(data);
    }

    }

    

 
