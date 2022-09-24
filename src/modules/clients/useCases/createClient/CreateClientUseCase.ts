import {prisma} from "../../../../database/prismaClient"
import { hash} from 'bcrypt'
interface ICreateClient{
    username: string;
    password: string;
}

export class  CreateClientUseCase{
    async execute({password, username}: ICreateClient){

        //Validar se o usuarios existe

        const clientExist = await prisma.clients.findFirst({
            where:{
                username:{
                    equals: username                    
                }
            }
        })

        if(clientExist){
            throw new Error("Client already exists")
        }

        const hasPassword = await hash(password, 10)

        return await prisma.clients.create({
            data:{
                username,
                password: hasPassword
            }
        })

    }
}