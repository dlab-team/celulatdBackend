import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favorite {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  video_id: number;

}