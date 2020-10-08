import { IUsersRepository } from "../IUserRepository";
import {User} from "../../entities/User";
import {db} from "../../database/connection";
import { ILoginUserRequestDTO } from "../../useCases/CreateUsers/CreateUserDTO";


export class UserDBconnections implements IUsersRepository{
  private users: User[] = [];

  
  async findByEmail(email:string): Promise<User[]>{
    const userEmail = await db("users").where('email',"=",email);


    return userEmail;

  } 
  async registerUser(user:User):Promise<void>{
    // const trx = await  db.transaction();
    const{name,email,password,id,telNumber}=user ;
    const pedidosCount = 0;
    try{
     await db('users').insert({name,email,password,id,telNumber,pedidosCount});
     return console.log("foi")
    }
    catch{
      return console.error("Error ao registrar usuario")

    }
  }
  async getUserById(id:string):Promise<User[]>{
    
      const userId = await db("users").where("id","=",id);
      return userId;
    
  }
  async userLogin({email,password}:ILoginUserRequestDTO):Promise<string>{
    const userByEmail = this.findByEmail(email);
    if((await userByEmail)[0].password === password){
      
      return (await userByEmail)[0].id;
    }
    else{
      const err = "error"

      return err;
    }
   
   
    
  }

}