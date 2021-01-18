import Cars from '../tables/Cars'


export default class ShowCarsForUser {

     public async execute(id:number){

        const cars = await Cars.findAll({where: {idUser: id}})

        if(!cars || cars === [] || cars.length == 0){
            return "Não foi possível buscar os veículos"
        }

        return cars
    }
}