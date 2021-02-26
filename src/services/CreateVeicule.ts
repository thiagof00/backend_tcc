import ModelCars from '../models/ModelCars'
import Cars from '../tables/Cars'

export default class CreateVeicule {

    public async create(car:ModelCars){

        const findedCar = Cars.findOne({where: {placa: car.placa}})

        if(findedCar == null){
            return "esse veículo já está no banco de dados"
        }

        const newCar = await Cars.create({
            idUser:car.idUser,
            placa:car.placa,
            modelo:car.modelo,
            cor:car.cor,
            ano:car.ano
        })
        if(!newCar){
            return "não foi possível fazer o cadastro do veículo, tente novamente mais tarde"
        }

        return newCar
    }
}