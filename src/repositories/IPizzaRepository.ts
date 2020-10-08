import { Pizza } from "../entities/Pizza";
import { IPizzaDTO } from "../useCases/Order/IPizzaDTO";

export interface IPizzaRepository{
  choosePizza(pizza:IPizzaDTO):Promise<Pizza>;

}