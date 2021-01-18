import carsEst from '../tables/CarsEst'




export default class GetOut{

    public async execute(idOfUser:number){
        const GetOutWithCar = await carsEst.destroy({where:{id:idOfUser}})

        if(GetOutWithCar == 0){
            return "não há nenhum veículo com esse usuário estacionado"
        }

        return GetOutWithCar
    }
}