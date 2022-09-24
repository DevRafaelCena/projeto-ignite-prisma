import {prisma} from "../../../../database/prismaClient"
import { hash} from 'bcrypt'


interface ICreateDeliveryman{
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async execute({username, password} : ICreateDeliveryman){
          //Validar se o usuarios existe

        const deliveryExist = await prisma.deliveryman.findFirst({
            where:{
                username:{
                    equals: username                    
                }
            }
        })

        if(deliveryExist){
            throw new Error("deliveryman already exists")
        }

        const hasPassword = await hash(password, 10)

        return await prisma.deliveryman.create({
            data:{
                username,
                password: hasPassword
            }
        })
    }
}