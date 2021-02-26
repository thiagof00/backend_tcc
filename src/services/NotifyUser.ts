// import Users from '../tables/Users'
import Cars from '../tables/Cars'
import Notifications from '../tables/Notifications'
import {Op} from 'sequelize'
import Fines from '../tables/Fines'

export default class NotifyUser{

    public async notify(id:number, nome: string){
    
        const findCar = await Cars.findOne({where:{id}})

        if(!findCar){
            return "carro não encontrado"
        }

        const notification = await Notifications.create({
            idUser: findCar.idUser,
            nomeSupervisor: nome})

        if(!notification){
            "não foi possível notificar o veículo"
        }

        const incrementNotification = findCar.increment('notf', {silent: true})

        if(!incrementNotification){
            return "não conseguimos notificar o carro"
        }

        return notification

        
    }
    public async pushNotifyAndFines(id:number){

        const findCarWithNotifications = await Notifications.findAll({where:{idUser: id}})

        if(findCarWithNotifications.length == 0 ){
            return "nenhuma notificação"
        }
        const findCarsWithFines = await Fines.findAll({where:{idUser: id}})

        return {findCarWithNotifications, findCarsWithFines}

    }
}