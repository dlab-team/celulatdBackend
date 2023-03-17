import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  usuario_id: number;
  @Column()
  number_click: number;



}