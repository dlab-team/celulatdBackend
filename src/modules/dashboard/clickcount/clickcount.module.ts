import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClickcountController } from './clickcount.controller';
import { Clickcount } from './clickcount.entity';
import { ClickcountService } from './clickcount.service';


@Module({
    imports: [TypeOrmModule.forFeature([Clickcount])],
    controllers: [ClickcountController],
    providers: [ClickcountService],

})
export class clickcountModules {}
