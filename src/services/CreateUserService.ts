import Users from '../tables/Users'
import modelUser from '../models/ModelUser'
import Cars from '../tables/Cars'

export default class CreateUserService {

    public async create(user: modelUser, password:string){

        const newUser = await Users.create({
            nome: user.nome,
            sobrenome: user.sobrenome,
            email:user.email,
            cpf: user.cpf,
            dataNasc: user.dataNasc,
            senha: password,
            saldo: 0
        })
        if(!newUser){
            return "não foi possível criar o usuário"
        }
        
        const newCar = await Cars.create({
            idUser:newUser.id,
            placa:user.placa,
            modelo:user.modelo,
            cor:user.cor,
            ano:user.ano
        })

        const All = {newUser, newCar}

        return All

        
    }
}