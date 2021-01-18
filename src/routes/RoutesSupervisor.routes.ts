import {Router} from 'express'
import ShowCars from '../services/ShowAllCarsInPark'
import NotifyUser from '../services/NotifyUser'

const RoutesSupervisor = Router()

RoutesSupervisor.get("/", async(request, response)=>{
    const showCars = new ShowCars()
    const cars = await showCars.show()

    response.json(cars)
})
RoutesSupervisor.get("/notify/:id", async(request, response)=>{
    const {id} = request.params

    const notifyUser = new NotifyUser() 

    const findCar = await notifyUser.notify(Number(id))

    response.json(findCar)
})



export default RoutesSupervisor