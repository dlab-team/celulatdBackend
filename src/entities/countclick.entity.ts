import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usr } from "./user.entity";


@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number_click: number;  
  
  @Column()
  id_user: number;


}