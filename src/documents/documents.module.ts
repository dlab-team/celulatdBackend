import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documents } from './entities/document.entity';
import { ViewDocuments } from 'src/entities/view-documents';


@Module({
  imports: [
  
    TypeOrmModule.forFeature([Documents, ViewDocuments ])
    ],
  controllers: [DocumentsController],
  providers: [DocumentsService]
})
export class DocumentsModule {}
