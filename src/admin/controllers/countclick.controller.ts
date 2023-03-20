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
import { ClickDto } from 'src/dto/video.dto/click.dto';
import { CountClickService } from '../services/countClick.service';
  
  
  @Controller('countclick')
  export class CountClickController {
    constructor(private clickService: CountClickService) {}
  
    
    // post para crear Video por id
  
    @Post('click/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    createClickId(@Param('id') id: number, @Body() clickDto: ClickDto) {
      console.log(clickDto);
      this.clickService.saveClickId(id, clickDto);
    }
    //eliminar video
  
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.clickService.delete(id);
    }
  
    //ver por id
    @Get('click/:id')
    getOne(@Param('id') id: number) {
      return this.clickService.findOne(id);
    }
  
    //actualizar por id
    @Put('click/:id')
    update(@Param('id') id: number, @Body() body: any) {
      return this.clickService.update(id, body);
    }
  }
  