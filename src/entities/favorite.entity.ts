import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usr } from "./user.entity";
import { Video } from "./video.entity";



@Entity()
export class Favorite {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usr, user => user.favorite)
  user: Usr;

  @Column({ type: 'timestamptz' }) 
  date_joined: Date;

  @ManyToOne(() => Video, video => video.favorite)
  video: Video;
}