import { IPizzaDTO } from "../useCases/choosePizza/IPizzaDTO";


export class Pizza{
  public userName : string;
  public size:string;
  public flavors:string[];
  public frete:number;

  constructor(props:IPizzaDTO){
    Object.assign(this,props);
    // this.userName = User.name;

}
  
}