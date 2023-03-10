import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LandingService } from '../service/landing.service';

//para el contador de click debemos usar put para actualizar una fila, lo mismo con delete y get:id
//solo debmos mostrar una fila
//get(all) no lo usaremos y post tampoco, pero debemos hacer que por defecto sea 0 al iniciar

@Controller('landing/click')
export class LandingController {
    constructor (
        private LandingService: LandingService
    ) {}
    @Get()
       //no se usa como contador de click
    getAll(){
        return this.LandingService.findAll();
    }
    //para usar en contador de click get:1
    @Get(':id')
    getOne(@Param('id') id: number){
        return this.LandingService.findOne(id);
    }
    //no se usa como contador de click
    @Post()
    create(@Body() body: any){
        return this.LandingService.create(body);
    }

    //para usar como contador de click ej: put:1
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.LandingService.update(id, body);
    }
     //para usar como contador de click ej: delete:1
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.LandingService.delete(id);
    }

}
