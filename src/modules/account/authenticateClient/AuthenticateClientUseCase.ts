import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'


interface IAuthenticateClient {
    username: string;
    password: string

}

export class AuthenticateClientUseCase {
    async execute({username, password} : IAuthenticateClient){
        

        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        })

        if(!client){
            throw new Error("Username or Password invalid")
        }

        const passwordMatch = await compare(password, client.password)

        if(!passwordMatch){
            throw new Error("Username or password invalid!")
        }


        const token = sign({username}, "8fb1a09817c5bd6aa934341ca131dec1", {
            subject: client.id,
            expiresIn: "1d"
        })
        
        return token




    }
}