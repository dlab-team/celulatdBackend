

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clickcount } from "src/entities/countclick.entity";
import { Video } from "src/entities/video.entity";
import { MenAdmin } from "src/entities/mensage-administrator";
import { UserFavorites } from "src/entities/user-favorites";
import { StadistUser } from "src/entities/statistics-user";

@Entity('users')
export class User {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 50 })
    email: string;
  
    @Column('varchar', { length: 100 })
    password: string;
    

    @OneToMany(
        () => Video, 
        (video)=> video.user)
        video: Video[];

    @OneToMany(
        () => Clickcount, 
        (clickcount) => clickcount.user)
        clickcount: Clickcount[];

    @OneToMany(
        () =>  MenAdmin, 
        ( menAdmin) =>  menAdmin.user)
        menAdmin:  MenAdmin[];

    
    @OneToMany(
        () =>  StadistUser, 
        ( stadistUser) =>  stadistUser.user)
        StadistUser:  StadistUser[];

    @OneToMany(
        () =>  UserFavorites, 
        (userFavorites) =>  userFavorites.user)
        userFavorites:  UserFavorites[];
    


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }



}
