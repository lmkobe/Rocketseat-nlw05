import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

    private usersRepository: Repository<User>;  

    constructor (){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){

        //Veriicar se usuario existe
        const userExists = await this.usersRepository.findOne({email,});
        
        //Se existir, retornar user
        if (userExists){
            return userExists;
        }
        
        //Se nao existir, salvar no BD
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);
        
        return user;
        
    }
}

export {UsersService}