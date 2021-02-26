import Fines from '../tables/Fines'
import Cars from '../tables/Cars'

export default class FineCar{


    public async Fine(nome:string, motivo:string, placa:string){

        const findCar = await Cars.findOne({where:{placa}})

        if(!findCar){
            return "Erro ao encontrar o veículo"
        }
        if(findCar?.notf > 3){
            const CarWithNotifications0 = await findCar.decrement('notf',{by: findCar.notf, silent:true})

            if(!CarWithNotifications0){
                return "Ocorreu um erro ao multar, tente novamente"
            }
            const fined = await Fines.create({
                idUser: findCar.idUser,
                motivo,
                nomeSupervisor: nome
            })

            if(!fined){
                return "Ocorreu um erro ao multar"
            }            
            return CarWithNotifications0
        }else{
            return "esse carro não tem notificações o suficiente para ser multado"
        }

    }
}