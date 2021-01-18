import { hash } from 'bcrypt'
import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import AuthenticationService from '../services/AuthenticationService'
import ParkCar from '../services/ParkCarService'
import GetOut from '../services/GetOutOfParkingLot'
import UpdateService from '../services/UpdateServices'
import DeleteService from '../services/DeleteService'
import ShowCarsForUser from '../services/ShowCarsForUser'
import CreateVeicule from '../services/CreateVeicule'
import CreateLoja from '../services/CreateLoja'
import AddSaldo from '../services/AddSaldo'

const RoutesUsers = Router()

//criação de usuário
RoutesUsers.post("/", async (request, response)=>{
    const user= request.body
    const CreateUser = new CreateUserService()

    hash(user.senha, 10, async (err, passwordEncripted)=>{
        const newUser = await CreateUser.create(user, passwordEncripted)
        
        response.json({user:newUser})
    }) 

        
})
//criação de veículo
RoutesUsers.post('/cars', async(request, response)=>{
    const {ano,cor,modelo,placa,idUser} = request.body
    Number(idUser)
    const car = {ano,cor,modelo,placa,idUser}
    const CreateService = new CreateVeicule()

    const createCarService = await CreateService.create(car)

    response.json(createCarService)

})
// criação de lojas
// RoutesUsers.post('/lojas', (request, response)=>{
//     const {nome, cnpj, endereco, horario, email, senha} = request.body

//     const lojasService = new CreateLoja

//     lojasService.execute(nome, cnpj, endereco, horario, email, senha)
//     .then(loja=>{
//         response.json(loja)

//     })
//     .catch(err=>{
//         response.json(err)
//     })
// })
//autenticação
RoutesUsers.post("/auth", async (request, response)=>{
    const {cpf, senha} = request.body
    const auth = new AuthenticationService()
    console.log(senha)

   const userAuth = await auth.execute({cpf, senha})

   response.json(userAuth)
})
//puxar os carros de acordo com o usuário
RoutesUsers.get('/getcars/:id', async(request, response)=>{

    const {id} = request.params

    const CarsId = new ShowCarsForUser

    const ShowCars = await CarsId.execute(Number(id))
    
    response.json(ShowCars)
    
})
// adicionar saldo
RoutesUsers.post("/saldo", async(request, response)=>{

    const {saldo, userId} = request.body

    const Saldo = new AddSaldo
    Number(saldo)
    const newSaldo = await Saldo.add(saldo, userId)

    response.json(newSaldo)

})
//estacionar
RoutesUsers.post("/park", async (request, response)=>{
    const {latitude, longitude, placa, tempo} = request.body
    const ParkedCar = new ParkCar()
    var valueTime =  0
    switch (tempo) {
        case "30":
            var valueTime = 1
            break;
    
            case "60":
                var valueTime = 3
                break;
    
                case "120":
                    var valueTime = 5
                    break;
                
        default:
            break;
    }

     const parkedCar = await ParkedCar.execute({latitude, longitude, placa, tempo, valueTime})

     response.json(parkedCar)
})
// sair do estacionamento
RoutesUsers.get("/getout/:id", async(request, response)=>{

    const {id} = request.params
    const getOut = new GetOut()
    const GetOutForPark =  await getOut.execute(Number(id))

    response.json(GetOutForPark)
})
// //puxar id para update
// RoutesUsers.get("/update/:id", (request, response)=>{
    
//     const {id} = request.params
//     const idUser = Number(id)
    
//     const updateService = new UpdateService()

//     const userForUpdate = updateService.push(idUser)
    
// })

//update
RoutesUsers.post("/updateuser", (request, response)=>{

    const updateUser = request.body
    const updateService = new UpdateService()

    const userForUpdate = updateService.execute(updateUser)
    userForUpdate.then((user)=>{
        response.json(user)
    })
})
//deletar usuário
RoutesUsers.delete("/deleteuser/:id", (request, response)=>{

    const {id} = request.params
    const userForDelete = Number(id)
    const deleteService = new DeleteService()

    deleteService.execute(userForDelete).then((deleted)=>{
        response.json({message: "The user "+ deleted + " has been deleted"})
    }).catch((err)=>{
        response.json(err)
    })
})

export default RoutesUsers