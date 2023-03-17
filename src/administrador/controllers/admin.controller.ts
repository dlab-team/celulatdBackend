import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from '../service/admin.service';

//para el contador de click debemos usar put para actualizar una fila, lo mismo con delete y get:id
//solo debmos mostrar una fila
//get(all) no lo usaremos y post tampoco, pero debemos hacer que por defecto sea 0 al iniciar

@Controller('usuarios')
export class AdminController {
    constructor (
        private AdminService: AdminService
    ) {}
    @Get()
       //no se usa como contador de click
    getAll(){
        return this.AdminService.findAll();
    }
    //ver usuario por id
    @Get('view/:id')
    getOne(@Param('id') id: number){
        return this.AdminService.findOne(id);
    }
    //no se usa como contador de click
    @Post()
    create(@Body() body: any){
        return this.AdminService.create(body);
    }

    //para usar como contador de click ej: put:1
    @Put(':id')

    update(@Param('id') id: number, @Body() body: any){
        //funcion hace objeto + 1 mas body 



        return this.AdminService.update(id, body);
    }
     //eliminar usuario
    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.AdminService.delete(id);
    }

}
