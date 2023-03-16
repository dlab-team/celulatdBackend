import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { View } from './view.entity';
import { ViewService } from './view.service';
import { ViewController } from './views.controller';


@Module({
    imports: [TypeOrmModule.forFeature([View])],
    controllers: [ViewController],
    providers: [ViewService],

})
export class DashboardModules {}
