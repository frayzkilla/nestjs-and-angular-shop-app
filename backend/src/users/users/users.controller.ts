import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/:id/:password')
    getAll(@Param('id') id: string, @Param('password') password: string){
        return this.usersService.findAll(id, password);
    }
}
