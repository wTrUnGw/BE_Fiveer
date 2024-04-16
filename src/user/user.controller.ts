import { Controller } from '@nestjs/common';
@Controller('user')
export class UserController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();

    }
}
