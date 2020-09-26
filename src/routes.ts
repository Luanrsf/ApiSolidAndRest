import { response, Router } from "express"
import { createUserController } from "./useCases/CreateUsers";



const router = Router()

router.post("/users", (req,res)=>{
  return createUserController.handle(req,res);
});

export{router}
