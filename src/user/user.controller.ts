import { Param, Get, Controller, Post, Body } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly ConfigService: ConfigService,
        private readonly userService: UserService
    ) {}


    @Get(':id')
    findOne(@Param('id', CustomParseIntPipe) id: string) {
        return `Ola do controller do user #${id}`
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }
}
