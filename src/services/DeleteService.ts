import Users from '../tables/Users'
import Cars from '../tables/Cars'

export default class DeleteService {

    public execute(id: number){
        const Deleted = Users.destroy({where:{id: id}}).then((response)=>{
            return response
        }).catch((err)=>{
            throw new Error(err)
        })

        return Deleted
    }
    public async DeleteCar(id: number){
        const findCar = await Cars.findOne({where:{id}})

        if(!findCar){
            return "Este veículo não existe."
        }
        const findAllCars = await Cars.findAll({where: {idUser: findCar.idUser}})

        if(findAllCars.length < 2){
                return "Você pode ter no mínimo um veículo, impossível deletar"
        }

        const carDeleted = await Cars.destroy({where:{id}})

        if(!carDeleted || carDeleted == 0){
            return "não foi possivel deletar o veículo"
        }
        return "Carro deletado!"
    }
}