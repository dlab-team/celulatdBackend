import { User } from 'src/registerUser/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
 
  ManyToOne,
} from 'typeorm';
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

  @ManyToOne(() => User, user => user.video)
  user: User;

  @OneToOne(() => View)
  @JoinColumn({ name: 'video_id' })
  view: View;

  

}

 
