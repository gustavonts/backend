import { Param, Get, Controller } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
    @Get(':id')
    findOne(@Param('id', CustomParseIntPipe) id: string) {
        return `Ola do controller do user #${id}`
    }
}
