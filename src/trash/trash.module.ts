import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trash } from 'src/entities/trash.entity';
import { TrashController } from './controller/trash.controller';
import { TrashService } from './service/trash.service';



@Module({
  imports: [
  TypeOrmModule.forFeature([Trash])
],
  controllers: [TrashController],
  providers: [TrashService]
})
export class TrashModule {}
