import {  Column, Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Usr } from "./user.entity";
import { Video } from "./video.entity";

@Entity()
export class Favorite {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => Usr, user => user.favorite)
  favorite: Usr;

  @ManyToOne(() => Video, video => video.favorite)
  video: Video;

  @Column({ type: 'timestamptz', nullable: true })
  date_agregate: Date;

}