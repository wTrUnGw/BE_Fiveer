import { Injectable } from '@nestjs/common';
import { PrismaClient, NguoiDung } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) { }
    prisma = new PrismaClient();

    async getAllUser(): Promise<NguoiDung[]> {
        const allUser = await this.prisma.NguoiDung.findMany();
        return allUser;
    }
}
