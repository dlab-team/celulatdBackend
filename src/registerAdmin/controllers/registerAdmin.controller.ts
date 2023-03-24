import { Body, Controller, Post,} from '@nestjs/common';
import { AdminDto } from 'src/dto/admin.dto';

import { RegisterAdminService } from '../service/registerAdmin.service';

@Controller('register_admin')
export class RegisterAdminController {
    constructor (
        private registerAdminService: RegisterAdminService
    ) {}
  
    //ingresa usuario administrador
    @Post()
    create(@Body() body: AdminDto){
        return this.registerAdminService.create(body);
    }

}
