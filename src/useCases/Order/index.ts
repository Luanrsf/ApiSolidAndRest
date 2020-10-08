import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreatePizzaController } from "./CreatePizzaController";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";
import {DBPizzaRepository} from "../../repositories/implementations/DBPizzaRepository";


const pizzaRepository = new DBPizzaRepository();


const createPizzaUseCase = new CreatePizzaUseCase(pizzaRepository);
const createPizzaController = new CreatePizzaController(createPizzaUseCase);

export {createPizzaUseCase,createPizzaController}