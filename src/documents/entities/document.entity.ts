import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
