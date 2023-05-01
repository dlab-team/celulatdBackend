import {  Column, Entity,ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./video.entity";

@Entity()
export class Favorite {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  date_favorites: Date;



  @Column({ type: 'timestamptz', nullable: true })
  date_agregate: Date;

}