import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
 
  ManyToOne,
} from 'typeorm';
import { Usr } from './user.entity';
import { View } from './view.entity';




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

  @ManyToOne(() => Usr, user => user.video)
  user: Usr;

  @OneToOne(() => View)
  @JoinColumn({ name: 'video_id' })
  view: View;
  

  

}

 
