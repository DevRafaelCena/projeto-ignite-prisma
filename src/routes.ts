import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController"
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController"
import { DeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController"

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryController = new CreateDeliveryController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliveryController = new DeliveryController()

routes.post("/client/authenticate" , authenticateClientController.handle)
routes.post("/deliveryman/authenticate" , authenticateDeliverymanController.handle)


routes.post("/client/", createClientController.handle )

routes.post("/deliveryman/", createDeliveryController.handle )

routes.post("/deliverie/", deliveryController.handle )


export { routes }