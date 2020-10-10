import {Router} from 'express'
import ShowCars from '../services/ShowAllCarsInPark'

const RoutesSupervisor = Router()

RoutesSupervisor.get("/", (request, response)=>{
    const showCars = new ShowCars()
    const cars = showCars.show()
    
    cars.then((allCars)=>{
        response.json(allCars)
    })
})



export default RoutesSupervisor