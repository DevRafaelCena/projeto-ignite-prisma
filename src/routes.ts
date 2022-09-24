import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController"
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController"


const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryController = new CreateDeliveryController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()


routes.post("/client/authenticate" , authenticateClientController.handle)
routes.post("/deliveryman/authenticate" , authenticateClientController.handle)


routes.post("/client/", createClientController.handle )

routes.post("/deliveryman/", createDeliveryController.handle )


export { routes }