import { AdressDBconnections } from "../../repositories/implementations/AdressDBconnections";
import { AdressController } from "./adressController";
import { AdressUseCase } from "./adressUseCase";

const adressDBconnections = new AdressDBconnections;
const adressUseCase = new AdressUseCase(adressDBconnections);
const adressController = new AdressController(adressUseCase);

export {adressUseCase,adressController}