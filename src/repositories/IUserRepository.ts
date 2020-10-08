
import { User } from "../entities/User";
import { ILoginUserRequestDTO } from "../useCases/CreateUsers/CreateUserDTO";

export interface IUsersRepository{
  findByEmail(email:string):Promise<User>;
  registerUser(user:User):Promise<void>;
  getUserById(id:string):Promise<User[]>;
  userLogin({email,password}:ILoginUserRequestDTO):Promise<string>;
} 