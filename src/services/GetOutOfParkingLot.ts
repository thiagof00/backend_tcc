import Cars from '../tables/Cars'




export default class GetOut{

    public execute(idOfUser:number){
        const GetOutWithCar = Cars.destroy({where:{idUser:idOfUser}})

        return GetOutWithCar
    }
}