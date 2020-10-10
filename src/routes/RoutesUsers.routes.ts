import { hash } from 'bcrypt'
import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import AuthenticationService from '../services/AuthenticationService'
import ParkCar from '../services/ParkCarService'
import GetOut from '../services/GetOutOfParkingLot'
import UpdateService from '../services/UpdateServices'
import DeleteService from '../services/DeleteService'

const RoutesUsers = Router()

RoutesUsers.get("/", (request, response)=>{
response.json({"message": "users"})
})


RoutesUsers.post("/", (request, response)=>{
    const user= request.body
    const CreateUser = new CreateUserService()
    hash(user.senha, 10, (err, passwordEncripted)=>{
        const newUser = CreateUser.create(user, passwordEncripted)
        newUser.then((user)=>{
            response.json({user:user})
        })
    }) 

        
})
RoutesUsers.post("/auth", (request, response)=>{
    const {email, password} = request.body
    const auth = new AuthenticationService()

   const userAuth = auth.execute({email, password})
    
   userAuth.then((user)=>{
       response.json({user:user})
   })
})

RoutesUsers.post("/park", (request, response)=>{
    const NewCar = request.body
    const ParkedCar = new ParkCar()

    const carInPark = ParkedCar.create(NewCar)

    carInPark.then((car)=>{
        response.json({car:car})
    })
})

RoutesUsers.delete("/getout/:id", (request, response)=>{

    const {id} = request.params
    const getOut = new GetOut()
    const NewAllCars =  getOut.execute(Number(id))

   NewAllCars.then((cars)=>{
       response.json({cars})
   })
})

RoutesUsers.get("/update/:id", (request, response)=>{
    
    const {id} = request.params
    const idUser = Number(id)
    
    const updateService = new UpdateService()

    const userForUpdate = updateService.push(idUser)
    userForUpdate.then((user)=>{
        response.json(user)
    })
    
})

RoutesUsers.post("/updateuser", (request, response)=>{

    const updateUser = request.body
    const updateService = new UpdateService()

    const userForUpdate = updateService.execute(updateUser)
    userForUpdate.then((user)=>{
        response.json(user)
    })
    

})
RoutesUsers.delete("/deleteuser/:id", (request, response)=>{

    const {id} = request.params
    const userForDelete = Number(id)
    const deleteService = new DeleteService()

    deleteService.execute(userForDelete).then((deleted)=>{
        response.json({message: "The user has been deleted. "+ deleted + " has been deleted"})
    }).catch((err)=>{
        response.json(err)
    })
})

export default RoutesUsers