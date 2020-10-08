import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserDBconnections} from "../../repositories/implementations/UserDBconnections";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const userDBconnections = new UserDBconnections();

const createUserUseCase = new CreateUserUseCase(
  userDBconnections,
  mailtrapMailProvider
);
const createUserController = new CreateUserController(
  createUserUseCase
);
 
export {createUserUseCase, createUserController}
