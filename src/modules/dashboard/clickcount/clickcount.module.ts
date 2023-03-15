import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clickcountController } from './clickcount.controller';
import { clickcountService } from './clickcount.service';
import { clickcount } from './clickcount.entity';

@Module({
    imports: [TypeOrmModule.forFeature([clickcount])],
    controllers: [clickcountController],
    providers: [clickcountService],

})
export class clickcountModules {}
