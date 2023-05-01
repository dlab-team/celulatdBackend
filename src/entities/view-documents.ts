import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    
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
  
    
    
  }
  