import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';





@Entity()
export class Video {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: number;
  
  @Column()
  route_archive: string;

  @Column()
  user_id: number;
  
}

 
