import Cars from '../tables/Cars'

export default class ShowCars {
    
    public show(){
        const AllCars = Cars.findAll()
        .then((cars)=>{
            return cars
        })
        .catch((err)=>{
            throw new Error("Erro ao listar todos os carros estacionados"+ err)
        })

        return AllCars
    }
}