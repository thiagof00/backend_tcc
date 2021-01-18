import carsEst from '../tables/CarsEst'


export default class NotifyUser{

    public async notify(id:number){
        const findCar = await carsEst.findOne({where:{id}})

        if(!findCar){
            return "não foi possível notificar"
        }
        const carNotificated = await findCar.increment("notf")
        
        if(!carNotificated){
            return "não conseguimos notificar o usuário"
        }
        
        
    return findCar
    
    }
}