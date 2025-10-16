import { Param, Get, Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(
        private readonly ConfigService: ConfigService,
        private readonly userService: UserService
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne(@Param('id', CustomParseIntPipe) id: string) {
        return `Ola do controller do user #${id}`
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }
}
