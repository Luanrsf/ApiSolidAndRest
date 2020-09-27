import { celebrate,Segments,Joi} from "celebrate";
import {Router } from "express"
import { join } from "path";
import { createPizzaController } from "./useCases/choosePizza";
import { createUserController } from "./useCases/CreateUsers";
import { IndexUsers } from "./useCases/IndexUsers/IndexUser";


const indexUsers = new IndexUsers();
const router = Router()

router.post("/users",celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()

  })
  
}) ,(req,res)=>{
  return createUserController.handle(req,res);
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
