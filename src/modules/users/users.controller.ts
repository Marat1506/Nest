import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';


@Controller('users')
export class UserController {
    constructor(private readonly userSevice: UserService){}

    @Get('get-all-users')
    getUsers(){
        return this.userSevice.getUsers()
    }
}
