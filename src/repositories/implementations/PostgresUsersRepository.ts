import { IUsersRepository } from "../IUserRepository";
import {User} from "../../entities/User";
import {db} from "../../database/connection";


export class PostgresUserRespository implements IUsersRepository{
  private users: User[] = [];

  
  async findByEmail(email:string): Promise<User>{
    const userEmail = await db("users").select("email");
    const userDB = userEmail.find(user => user.email == email);
    console.log(userDB);

    return userDTO;

  } 
  async save(user:User):Promise<void>{
    // const trx = await  db.transaction();
    const{name,email,password,id}=user ;
    try{
     await db('users').insert({name,email,password,id});
     return console.log("foi")
    }
    catch{
      return console.log("deu ruim")

    }
  }

}