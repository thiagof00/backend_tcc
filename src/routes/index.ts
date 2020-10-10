import {response, Router} from 'express'
import RoutesSupervisor from './RoutesSupervisor.routes'
import RoutesUsers from './RoutesUsers.routes'

const routes = Router()

routes.use("/users", RoutesUsers)
routes.use("/supervisor", RoutesSupervisor)

routes.get("/login", (request, response)=>{
    response.json({"login": true})
})
export default routes