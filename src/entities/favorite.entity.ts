import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Video } from "./video.entity";



@Entity()
export class Favorite {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favorite)
  user: User;

  @Column({ type: 'timestamptz' }) 
  date_joined: Date;

  @ManyToOne(() => Video, video => video.favorite)
  video: Video;
}