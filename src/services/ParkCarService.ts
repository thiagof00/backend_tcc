import carsEst from '../tables/CarsEst'
import Cars from '../tables/Cars'
import ModelCars from '../models/ModelCars'
import Users from '../tables/Users'

interface Request{
    placa: string;
    tempo:string;
    latitude: string;
    longitude: string;
    valueTime:number;

}

export default class ParkCar {

    public async execute({placa, tempo, latitude, longitude, valueTime}:Request){

        if(latitude == "0" || longitude =="0"){

            return "as coordenadas não estão de acordo com o que é necessário para estacionar"
        }


        const findedCar = await Cars.findOne({where:{placa}})

        if(!findedCar){
            return "Carro não encontrado no banco de dados"
        }

        const findedUser = await Users.findOne({where: {id: findedCar.idUser}})

        if(!findedUser){
            return "Usuário não encontrado"
        }
        if(findedUser.saldo == 0 || findedUser.saldo < valueTime){
            return "o saldo do usuário é insuficiente ou igual a zero"
        }
        const decrementedUser = await findedUser.decrement('saldo', {by: valueTime})

        if(!decrementedUser){
            return "não foi possivel descontar o valor do saldo do usuário"
        }

        const parkedCar = await carsEst.create({
            id: findedUser.id,
            placa:findedCar.placa,
            ano:findedCar.ano,
            cor:findedCar.cor,
            latitude,
            longitude,
            modelo:findedCar.modelo,
            tempo
        })

        if(!parkedCar){
            return "não foi possivel estacionar"
        }

        return parkedCar
    }
}