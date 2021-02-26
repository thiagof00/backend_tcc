import { where } from 'sequelize'
import Users from '../tables/Users'


export default class AddSaldo{

    public async add(saldo: number, userId:number){

    const findUser = await Users.findOne({where:{id: userId}})

        if(!findUser){
            return "o usuário não foi encontrado, tente deslogar e voltar a aplicação"
        }
    const response = await Users.increment('saldo',{where:{id:userId},by: saldo})
        
        if(!response){
            return "não foi possível realizar a adição de saldo"
        }

    return response
    }
}