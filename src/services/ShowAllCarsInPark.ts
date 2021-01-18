import CarsEst from '../tables/CarsEst'

export default class ShowCars {
    
    public async show(){
        const AllCars = await CarsEst.findAll()

        if(!AllCars || AllCars.length == 0){
            return "não há nenhum carro estacionado"
        }

        return AllCars
    }
}