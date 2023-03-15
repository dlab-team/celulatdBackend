import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { favoriteController } from './favorite.controller';
import { favoriteService } from './favorite.service';
import { Favorite } from './favorite.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Favorite])],
    controllers: [favoriteController],
    providers: [favoriteService],

})
export class favoriteModules {}
