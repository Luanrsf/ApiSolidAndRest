import {Router } from "express"
import { createPizzaController } from "./useCases/choosePizza";
import { createUserController } from "./useCases/CreateUsers";
import { IndexUsers } from "./useCases/IndexUsers/IndexUser";


const indexUsers = new IndexUsers();
const router = Router()

router.post("/users", (req,res)=>{
  return createUserController.handle(req,res);
});
router.post("/pizza", (req,res)=>{
  return createPizzaController.handleChoosePizza(req,res);
})
router.get("/users",
   indexUsers.index

)
export{router}
