import { celebrate,Segments,Joi} from "celebrate";
import {Router } from "express"
import { join } from "path";
import { createPizzaController } from "./useCases/Order";
import { createUserController } from "./useCases/CreateUsers";
import { IndexUsers } from "./useCases/IndexUsers/IndexUser";
import { adressController, adressUseCase } from "./useCases/adress";


const indexUsers = new IndexUsers();
const router = Router()
router.post('/adress',celebrate({
  [Segments.BODY]:Joi.object().keys({
    id:Joi.string().id().required(),
    street:Joi.string().required(),
    streetNumber:Joi.string().required(),
    cep:Joi.string().required(),
    complemento:Joi.string().required()
  })
}),
(req,res)=>{
  return adressController.handleAddAdress(req,res);
}

)
router.post("/login",celebrate({
  [Segments.BODY]:Joi.object().keys({
    email:Joi.string().required().email(),
    password:Joi.string().required()
  })
}),
(req,res)=>{
  return createUserController.handleLogin(req,res);
}
)
router.post("/users",celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    telNumber:Joi.string().required()

  })
  
}) ,(req,res)=>{
  return createUserController.handleRegister(req,res);
});
router.post("/pizza",celebrate({
  [Segments.BODY]:Joi.object().keys({
    userName: Joi.string().required(),
    size:Joi.string().required(),
    flavors: Joi.string().required(),
    frete: Joi.string().required()

  })
}) ,(req,res)=>{
  return createPizzaController.handleChoosePizza(req,res);
})
router.get("/users",
   indexUsers.index

)
export{router}
