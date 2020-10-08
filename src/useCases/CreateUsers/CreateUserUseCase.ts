import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO,ILoginUserRequestDTO } from "./CreateUserDTO";


export class CreateUserUseCase{

  constructor(
    private usersRepository:IUsersRepository,
    private mailProvider: IMailProvider,
  ){


  }

  async login({email,password}:ILoginUserRequestDTO){
    const userLogin = await this.usersRepository.userLogin({email,password});
    if(userLogin=="error"){
      throw new Error("Usuario senha incorretos")
    }else{
      console.log("Login efetuado com sucesso")
    }
    
  }
  async execute(data:ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    const arr = []
    console.log(userAlreadyExists)
    if(userAlreadyExists=== arr){
      throw new Error("User already exists.")
    }
    const user = new User(data);
    await this.usersRepository.registerUser(user);

    await this.mailProvider.sendMail({
      to:{
        name:data.name,
        email:data.email,
      },
      from:{
        name:"Equipe do meu app",
        email:"equipe@meuapp.com",
      },
      subejct:"Seja Bem vindo ao meu app",
      body:"<p>Voce ja pode fazer login na nossa plataforma.<p/>"
    })
}
}