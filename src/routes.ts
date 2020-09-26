import {Router } from "express"
import { createPizzaController } from "./useCases/choosePizza";
import { createUserController } from "./useCases/CreateUsers";



const router = Router()

router.post("/users", (req,res)=>{
  return createUserController.handle(req,res);
});
router.post("/pizza", (req,res)=>{
  return createPizzaController.handleChoosePizza(req,res);
})
export{router}
