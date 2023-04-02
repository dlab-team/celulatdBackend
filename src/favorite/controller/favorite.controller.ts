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
  
import { FavoriteDto } from 'src/dto/favorite.dto';
import { FavoriteService } from '../service/favorite.service';

  
  @Controller('favorite')
  export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}
  
    // post para crear favorito por id
  
    //  @Post('/:id')
    //  @HttpCode(HttpStatus.NO_CONTENT)
    //  createFavoriteId(@Param('id') id: number, @Body() favoriteDto: FavoriteDto) {
    //    console.log(favoriteDto);
    //    this.favoriteService.saveFavoriteId(id, favoriteDto);
    //  }

    //eliminar 
  
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.favoriteService.delete(id);
    }
  
    //ver por id

    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.favoriteService.findOne(id);
    }
  
    //actualizar por id

    @Put('/:id')
    update(@Param('id') id: number, @Body() body: FavoriteDto) {
      return this.favoriteService.update(id, body);
    }
  }
  