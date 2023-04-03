import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usr } from "./user.entity";


@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  number_click: number;  
  
  @ManyToOne(() => Usr, user => user.id)
  user: Usr;


}