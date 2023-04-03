import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { TrashDto } from 'src/dto/trash.dto';
import { TrashService } from '../service/trash.service';

@Controller('trash')
export class TrashController {

    constructor(private trashService: TrashService) {}
      
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
          return this.trashService.delete(id);
        }
      
        //ver por id
        @Get('/:id')
        getOne(@Param('id') id: number) {
          return this.trashService.findOne(id);
        }
      
        //actualizar por id
        @Put('/:id')
        update(@Param('id') id: number, @Body() body: TrashDto) {
          return this.trashService.update(id, body);
        }
      }
      


