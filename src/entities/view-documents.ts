import { Documents } from 'src/documents/entities/document.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    
  } from 'typeorm';
  
  
  @Entity()
  export class ViewDocuments{
    [x: string]: any;
   
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    title: string;
    
    route_archive: string;
  
    @Column({ type: 'timestamptz', nullable: true })
    date_publication: Date;
  
    @ManyToOne(
      () => Documents, 
      documents => documents.id)
      documents: Documents;
    
    @ManyToOne(
      () => ViewDocuments, 
      viewDocuments => viewDocuments.id)
      viewDocuments: ViewDocuments;  
      
    
    
    
  }
  