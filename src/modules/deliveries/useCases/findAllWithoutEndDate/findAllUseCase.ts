import { prisma } from "../../../../database/prismaClient"


export class FindAllUseCase{
    async execute(){
        const deliveries = await prisma.deliveries.findMany({
            where:{
                end_at:null
            }
        })

        return deliveries
    }
}