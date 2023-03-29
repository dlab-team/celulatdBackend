import { Module } from '@nestjs/common';
import { TrashController } from './controller/trash.controller';
import { TrashService } from './service/trash.service';


@Module({
  controllers: [TrashController],
  providers: [TrashService]
})
export class TrashModule {}
