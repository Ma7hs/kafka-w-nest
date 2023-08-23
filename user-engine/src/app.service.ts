import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateUserParams{
    name: string,
    email: string,
    phone: string,
    password: string
}

const userSelect = {
    id: true,
    name: true,
    email: true,
    phone: true,
    password: true
}

@Injectable()
export class AppService {
    constructor(private readonly prismaService: PrismaService){}

    async getUser(){
        const findUsers = await this.prismaService.user.findMany({
            select: {
                ...userSelect
            }
        })
        return findUsers    
    }

    async createUser({name,  phone, password, email}: CreateUserParams){
        return await this.prismaService.user.create({
            data: {
              name,
              phone,
              password,
              email
            }
        })
    }
}
