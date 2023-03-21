import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Video } from "./video.entity";



@Entity()
export class Favorite {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favorite)
  user: User;

  @Column()
  date_joined: string;
  

  @ManyToOne(() => Video, video => video.favorite)
  video: Video;
}