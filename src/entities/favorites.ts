import {  Column, Entity,ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { UserFavorites } from "./user-favorites";
import { Video } from "./video.entity";
import { Documents } from "src/documents/entities/document.entity";

@Entity()
export class Favorite {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  date_favorites: Date;

  @Column({ type: 'timestamptz', nullable: true })
  date_agregate: Date;
 
  @ManyToOne(
    () => UserFavorites, 
    userFavorites => userFavorites.id)
    userFavorites: UserFavorites;

  @ManyToOne(
    () => Video, 
    video => video.id)
    video: Video;  

    
  @ManyToOne(
    () => Documents, 
    documents => documents.id)
    documents: Documents;  
  
  

}