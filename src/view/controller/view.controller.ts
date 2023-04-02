import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put
  } from '@nestjs/common';

import { ViewDto } from 'src/dto/view.dto';
import { ViewService } from '../service/view.service';

  
  @Controller('view')
  export class ViewController {
    constructor(private viewService: ViewService) {}
  
    // post para crear view
  
    @Post()
    create(@Body() body: any) {
      return this.viewService.create(body);
    }
    
    // post para crear view por id
  
    @Post(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    saveviewId(@Param('id') id: number, @Body() viewDto: ViewDto) {
      console.log(viewDto);
      this.viewService.saveviewId(id, viewDto);
    }

    //eliminar view
  
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.viewService.delete(id);
    }
  
    //ver por id

    @Get(':id')
    getOne(@Param('id') id: number) {
      return this.viewService.findOne(id);
    }

    //ver todo

    @Get()
    getAll() {
      return this.viewService.findAll();
    }
  
    //actualizar por id
    
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
      return this.viewService.update(id, body);
    }
  }
  