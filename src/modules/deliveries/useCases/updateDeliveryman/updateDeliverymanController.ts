
import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./updateDeliverymanUseCase";

export class UpdateDeliverymanController{

    async handle(request: Request, response: Response) {

        const {id_deliveryman} = request.body
        const { id: id_delivery } = request.params

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()

        const result = await updateDeliverymanUseCase.execute({id_deliveryman, id_delivery})


        return response.json(result)


    }
}