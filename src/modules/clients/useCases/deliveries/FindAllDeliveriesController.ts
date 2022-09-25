import { Request, Response } from "express";
import { findAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class findAllDeliveriesController {
    async handle(request: Request, response: Response){

        const { id_client } = request

        const  findAllDeliveries = new findAllDeliveriesUseCase();

        const deliveries = await findAllDeliveries.execute(id_client)

        return response.json(deliveries)
    }
}