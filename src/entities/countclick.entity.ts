import { User } from "src/auth/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  number_click: number;  
  
  @ManyToOne(
    () => User, 
    user => user.id)
    user: User;

 

}