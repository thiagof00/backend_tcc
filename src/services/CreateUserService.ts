import Users from '../tables/Users'
import modelUser from '../models/ModelUser'


export default class CreateUserService {

    public async create(user: modelUser, password:string){

        const newUser = await Users.create({
            nome: user.nome,
            sobrenome: user.sobrenome,
            email:user.email,
            cpf: user.cpf,
            dataNasc: user.dataNasc,
            senha: password,
    // veículo

            placa: user.placa,
            modelo: user.modelo,
            cor: user.cor,
            ano: user.ano,
            tipo: user.tipo
        })
        .catch((err)=>{
            throw new Error(err)
        })
        return newUser

        
    }
}