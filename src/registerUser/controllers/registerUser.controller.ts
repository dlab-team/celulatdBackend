import { Body, Controller, Post,} from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { RegisterService } from '../service/registerUser.service';


@Controller('register')
export class RegisterController {
    constructor (
        private registerService: RegisterService
    ) {}
  
    //ingresa usuario nuevo
    @Post()
    create(@Body() body: UserDto){
        return this.registerService.create(body);
    }

}
