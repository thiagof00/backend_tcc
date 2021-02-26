import Users from '../tables/Users'
import modelUser from '../models/ModelUser'
import Cars from '../tables/Cars'
import Supervisors from '../tables/supervisors'


interface SupProps{
    nome:string;
    sobrenome:string;
    cpf:string;
    senha: string;
    email:string;
    local:string;

}


export default class CreateUserService {

    public async create(user: modelUser, password:string){

        const findUser = await Users.findOne({where:{cpf: user.cpf}})
        
        if(findUser){
            return "Usuário já no banco de dados"
        }

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
        const findCar = await Cars.findOne({where:{placa: user.placa}})
        
        if(findCar){

            return "O carro que você inseriu já existe no banco de dados"
        }

        const newCar = await Cars.create({
            idUser:newUser.id,
            placa:user.placa,
            modelo:user.modelo,
            cor:user.cor,
            ano:user.ano
        })
        return newUser

        
    }

    public async CreateSup(sup:SupProps, password:string){

        const findSup = Supervisors.findAll({where:{cpf: sup.cpf}})

        if(!findSup){
            return "Esse supervisor já existe no banco de dados"
        }
        const createSup = Supervisors.create({
            nome: sup.nome,
            sobrenome: sup.sobrenome,
            cpf: sup.cpf,
            email:sup.email,
            local: sup.local,
            senha: password
        })

        if(!createSup){
            return "não foi possível criar o supervisor"
        }

        return createSup
    }
}