import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController"


const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryController = new CreateDeliveryController()

routes.post("/authenticate" , authenticateClientController.handle)

routes.post("/client/", createClientController.handle )

routes.post("/deliveryman/", createDeliveryController.handle )


export { routes }