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

import { NotificationDto } from 'src/dto/notification.dto';
import { NotificationService } from '../services/notification.service';
  
  @Controller('notification')
  export class NotificationController {

    constructor(private notificationService: NotificationService) {}
  
    // post para crear notification por id
  
    // @Post('/:id')
    // @HttpCode(HttpStatus.NO_CONTENT)
    // createNotificationId(@Param('id') id: number, @Body() notificationDto: NotificationDto) {
    //   console.log(notificationDto);
    //   this.notificationService.saveNotificationId(id, notificationDto);
    // }
    
    //eliminar Notification
  
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.notificationService.delete(id);
    }
  
    //ver por id
    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.notificationService.findOne(id);
    }
  
    //actualizar por id
    @Put('/:id')
    update(@Param('id') id: number, @Body() body: any) {
      return this.notificationService.update(id, body);
    }
  }
  