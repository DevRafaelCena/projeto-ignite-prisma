
import { Request, Response } from "express";
import { FindAllUseCase } from "./findAllUseCase";

export class FindAllController{

    async handle(request: Request, response: Response) {
       

        const findAll = new FindAllUseCase()

        const result = await findAll.execute()

        return response.json(result)


    }
}