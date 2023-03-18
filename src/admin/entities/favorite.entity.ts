import { User } from "src/registerUser/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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