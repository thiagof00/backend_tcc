import Cars from '../tables/Cars'



export default class GetOut{

    public async execute(idUser:number){
        const GetOutWithCar = await Cars.update({estacionado:false, latitude: '', longitude: '', tempo: '' },{fields: ['latitude', 'longitude', 'tempo', 'estacionado'], where:{idUser:idUser, estacionado: true}})

        if(!GetOutWithCar){
            return "não há nenhum veículo com esse usuário estacionado"
        }

        return GetOutWithCar
    }
}