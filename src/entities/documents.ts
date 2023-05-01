import { User } from "src/auth/entities/user.entity";
import {   Column, Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Documents {
  
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  
  @ManyToOne(
    () => User, 
    user => user.id)
    user: User;


}