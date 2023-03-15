import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewController } from './views.controller';
import { ViewService } from './View.service';
import { View } from './View.entity';

@Module({
    imports: [TypeOrmModule.forFeature([View])],
    controllers: [ViewController],
    providers: [ViewService],

})
export class DashboardModules {}
