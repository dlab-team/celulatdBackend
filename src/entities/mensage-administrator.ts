
import { Admin } from "src/auth/entities/administrator";
import { User } from "src/auth/entities/user.entity";
import {  Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MenAdmin {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 50 })
    asunt: string;
  
    @Column('varchar', { length: 100 })
    content: string;
  
    @Column()
    fecha:Date;

    
    @ManyToOne(
        () => Admin, 
        admin => admin.id)
        admin: Admin;

    @ManyToOne(
        () => User, 
        user => user.id)
        user: User;

  
}
