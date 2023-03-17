import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegisterService } from '../service/registerUser.service';


//para el contador de click debemos usar put para actualizar una fila, lo mismo con delete y get:id
//solo debmos mostrar una fila
//get(all) no lo usaremos y post tampoco, pero debemos hacer que por defecto sea 0 al iniciar

@Controller('register')
export class RegisterController {
    constructor (
        private registerService: RegisterService
    ) {}
  
    //ingresa usuario nuevo
    @Post()
    create(@Body() body: any){
        return this.registerService.create(body);
    }

}
