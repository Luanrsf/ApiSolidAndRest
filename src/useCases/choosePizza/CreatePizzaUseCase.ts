
import {IPizzaRepository} from "./../../repositories/IPizzaRepository";
import { IPizzaDTO } from "./IPizzaDTO";
import { IMailProvider } from "../../providers/IMailProvider";
import { Pizza } from "../../entities/Pizza";

export class CreatePizzaUseCase{
  constructor(
    private mailProvider: IMailProvider,
  ){}
    async choosePizza(data:IPizzaDTO){
      const{userName,size,flavors,frete} = data;
      await this.mailProvider.sendMail({
        to:{
          name:data.userName,
          email:"luanramossfarias@gmail.com",
        },
        from:{
          name:"Pizzaria",
          email:"equipe@pizzaria.com",
        },
        subejct:`Obrigado pelo seu pedido ${data.userName}`,
        body:`Obrigado pelo seu pedido de uma pizza tamanho ${data.size}, com os sabores ${data.flavors}, o seu frete deu ${data.frete} reais.`
      })
    }

    }

    

 
