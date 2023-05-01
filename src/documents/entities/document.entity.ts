import { Favorite } from "src/entities/favorites";
import { ViewDocuments } from "src/entities/view-documents";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Documents {
  [x: string]: any;
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    title: string;
  
    @Column('text')
    description: string;
  
    @Column('float')
    duration: number;
    
    @Column('varchar', { length: 200 })
    route_archive: string;
  
    @Column({ type: 'timestamptz', nullable: true })
    date_publication: Date;

    @OneToMany(
      () =>  ViewDocuments, 
      (viewDocuments) => viewDocuments.id)
      viewDocuments: ViewDocuments[];
  
    }
