import { Request, Response } from "express";
import { findAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class findAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response){

        const { id_deliveryman } = request

        const  findAllDeliveries = new findAllDeliveriesUseCase();

        const deliveries = await findAllDeliveries.execute(id_deliveryman)

        return response.json(deliveries)
    }
}