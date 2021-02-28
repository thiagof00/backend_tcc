import Users from '../tables/Users'
import Supervisors from '../tables/supervisors'
import { compare } from 'bcrypt'
interface Request{
    cpf:string
    senha:string

}
export default class AuthenticationService {

    public async execute ({cpf, senha}:Request){
        
        const user = await Users.findOne({where:{cpf}})

        if(!user){
           const supervisor = await Supervisors.findOne({where:{cpf}})

           if(supervisor){
            const passwordMatched = await compare(senha, supervisor.senha)

            if(!passwordMatched){
                return "CPF ou senha incorretos"
            }
            return {sup:supervisor}
           }
           
            return "Usuário não encontrado"
        }
        const passwordMatched = await compare(senha, user.senha)

        if(!passwordMatched){
            return "CPF ou senha incorretos"
        }
        return {user:user}
}

}
 