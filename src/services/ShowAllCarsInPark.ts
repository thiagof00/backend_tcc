import CarsEst from '../tables/CarsEst'
import Cars from '../tables/Cars'

export default class ShowCars {
    
    public async show(){
        const AllCars = await Cars.findAll({where:{estacionado: true}})

        if(!AllCars || AllCars.length == 0){
            return "não há nenhum carro estacionado"
        }

        return AllCars
    }
}
