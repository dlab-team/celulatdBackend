import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from 'src/entities/favorite.entity';
import { Usr } from 'src/entities/user.entity';
import { FavoriteController } from './controller/favorite.controller';
import { FavoriteService } from './service/favorite.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Favorite,Usr])
    ],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
