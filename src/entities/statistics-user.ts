
import {  Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "src/auth/entities/user.entity";

@Entity()
export class StadistUser {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('int')
    fullView: number;
  
    @Column('int')
    fullViewDo:number;
    
    @Column('int')
    fullViewFav: number;

    @Column('int')
    fullViewCom: number;
  
    @Column('int')
    fullViewIncomp: number;

    @ManyToOne(
        () => User, 
        user => user.id)
        user: User;
    
}
