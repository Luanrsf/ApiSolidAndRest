import { Pizza } from "../entities/Pizza";
import { IPizzaDTO } from "../useCases/choosePizza/IPizzaDTO";

export interface IPizzaRepository{
  choosePizza(pizza:IPizzaDTO):Promise<Pizza>;

}