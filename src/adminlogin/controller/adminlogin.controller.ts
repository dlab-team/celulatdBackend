import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Put,
    Post
  } from '@nestjs/common';
import { AdminDto } from 'src/dto/admin.dto';
import { AdminLoginService } from '../service/adminlogin.service';

  

  
  @Controller('adminlogin')
  export class AdminLoginController {
    constructor(private adminLoginService: AdminLoginService) {}
  
    //ver por id
    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.adminLoginService.findOne(id);
    }
  
    //actualizar por id
    @Put('/:id')
    update(@Param('id') id: number, @Body() body: AdminDto) {
      return this.adminLoginService.update(id, body);
    }

     //ver todo

    @Get()
    getAll() {
     return this.adminLoginService.findAll();
    }

    //eliminar usuario

    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.adminLoginService.delete(id);
    }

      //ingresa usuario nuevo

      @Post()
      create(@Body() body: AdminDto){
          return this.adminLoginService.create(body);
      }

  }
  