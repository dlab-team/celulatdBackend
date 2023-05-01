import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from 'src/entities/favorites';
import { FavoriteController } from './controller/favorite.controller';
import { FavoriteService } from './service/favorite.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Favorite])
    ],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
