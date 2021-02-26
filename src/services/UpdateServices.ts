import Cars from '../tables/Cars'



interface CarsProps{
    placa:string
     modelo:string
      cor:string
       ano:string
        idUser:number
}

export default class UpdatesServices {

    public async UpdateCar(car: CarsProps){

        const findCar = await Cars.findOne({where:{idUser: car.idUser}})

        if(!findCar){
            return "carro não encontrado"
        }
        let placa = car.placa
        let modelo = car.modelo
        let cor = car.cor
        let ano = car.ano

        const updateCar = await findCar.update({placa, modelo, cor, ano}, {fields: ['placa', 'modelo', 'cor', 'ano']})

        if(!updateCar){
            return "não foi possível atualizar o carro"
        }

        return updateCar
    }
}