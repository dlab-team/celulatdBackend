import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usr } from "./user.entity";


@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usr)
  @JoinColumn({ name: 'user_id' })
  user: Usr;
  
  @Column()
  number_click: number;


}