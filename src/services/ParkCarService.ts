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
interface CarsAttributes {
    id?: number;
    idUser?: number

    placa?: string
    
    modelo?: string
    
    cor?: string
    
    ano?: string

    estacionado?: boolean;

    latitude?: string;

    longitude?: string;

    tempo?: string;

    notf?: number;

    
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

        const parkedCar = await Cars.update({latitude, longitude, tempo, estacionado: true},{fields: ['latitude', 'longitude', 'tempo', 'estacionado'], where:{placa}})

        if(parkedCar[0] < 1 || !parkedCar){
            return "não foi possivel estacionar"
        }
        const findCarParked = await Cars.findOne({where:{placa, estacionado:true}})

        if(!findCarParked){
            return "Houve um erro ao estacionar"
        }

        return {car:findCarParked, user:decrementedUser}
    }
}