import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController"
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliveryController"
import { DeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController"
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient"
import { FindAllController } from "./modules/deliveries/useCases/findAllWithoutEndDate/findAllController"
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman"
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/updateDeliverymanController"
import { findAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController"
import { findAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController"

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryController = new CreateDeliveryController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliveryController = new DeliveryController()
const findAllDeliveries = new FindAllController()
const updateDelivery = new UpdateDeliverymanController
const findAllDeliveriesClients = new findAllDeliveriesController()
const findAllDeliveriesDeliveryman = new findAllDeliveriesDeliverymanController()

routes.post("/client/authenticate" , authenticateClientController.handle)
routes.post("/deliveryman/authenticate" , authenticateDeliverymanController.handle)


routes.post("/client/", createClientController.handle )
routes.get("/client/deliveries" , ensureAuthenticateClient, findAllDeliveriesClients.handle)

routes.post("/deliveryman/", createDeliveryController.handle )
routes.get("/deliveryman/deliveries" , ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle)

routes.get("/deliveryman/available", ensureAuthenticateDeliveryman, findAllDeliveries.handle )
routes.put("/delivery/updateDeliveryman/:id" ,ensureAuthenticateDeliveryman, updateDelivery.handle)

routes.post("/deliverie/", ensureAuthenticateClient  ,deliveryController.handle )


export { routes }