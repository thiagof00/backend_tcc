import {response, Router} from 'express'
import {hash} from 'bcrypt'
import ShowCars from '../services/ShowAllCarsInPark'
import NotifyUser from '../services/NotifyUser'
import CreateUserService from '../services/CreateUserService'
import FineCar from '../services/FineCar'
const RoutesSupervisor = Router()

RoutesSupervisor.get("/", async(request, response)=>{
    const showCars = new ShowCars()
    const cars = await showCars.show()

    response.json(cars)
})

RoutesSupervisor.post("/", async (request, response)=>{
    const sup= request.body
    const Createuser = new CreateUserService()

    hash(sup.senha, 10, async (err, passwordEncripted)=>{
        const newsup = await Createuser.CreateSup(sup, passwordEncripted)
        
        response.json({sup:newsup})
    }) 

        
})


RoutesSupervisor.post("/notify/:id", async(request, response)=>{
    const {id} = request.params
    const {nome} = request.body

    const notifyUser = new NotifyUser() 

    const findCar = await notifyUser.notify(Number(id), nome)

    response.json(findCar)
})


RoutesSupervisor.post("/fined", async(request, response)=>{

    const {nome, motivo, placa} = request.body
    const fines = new FineCar()

    const Return = await fines.Fine(nome,motivo,placa)

    response.json(Return)

})


export default RoutesSupervisor