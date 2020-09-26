import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreatePizzaController } from "./CreatePizzaController";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();

const createPizzaUseCase = new CreatePizzaUseCase(mailtrapMailProvider);
const createPizzaController = new CreatePizzaController(createPizzaUseCase);

export {createPizzaUseCase,createPizzaController}