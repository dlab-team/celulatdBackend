
import {  Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class Admin {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 50 })
    email: string;
  

    @Column('varchar', { length: 100 })
    password: string;
    

    // @OneToMany(
    //            () => MenAdmin ,
    //             (menAdmin) => menAdmin.admin)
    // menAdmin: MenAdmin[];

    
}
