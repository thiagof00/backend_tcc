import Cars from '../tables/Cars'


interface RequestCar{
    id: Number;
    placa: string;
    modelo: string;
    cor:string;
    ano:string;
    tipo:string;
    
}

export default class ParkCar {

    public create(Car: RequestCar){
        const parkedCar = Cars.create({
            idUser: Car.id,
            placa: Car.placa,
            modelo: Car.modelo,
            cor: Car.cor,
            ano: Car.ano,
            tipo: Car.tipo
            
        }).catch((err)=>{
            throw new Error(err)
        })

        return parkedCar
    }
}