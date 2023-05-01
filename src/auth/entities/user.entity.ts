import { Clickcount } from "src/entities/countclick.entity";
import { Video } from "src/entities/video.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Notification } from "src/entities/notification.entity";
import { MenAdmin } from "src/entities/mensage-administrator";
import { UserFavorites } from "src/entities/user-favorites";
import { StadistUser } from '../../entities/statistics-user';

@Entity('users')
export class User {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 50 })
    email: string;
  
    // @Column('varchar', { length: 12 })
    // phone: string;

    @Column('varchar', { length: 100 })
    password: string;
    
    // @Column('varchar', { length: 500 })
    // photo: string;

    @OneToMany(
        () => Video, 
        (video)=> video.user)
        video: Video[];

    @OneToMany(
        () => Notification, 
        (notification) => notification.user)
        notification: Notification[];
    
    @OneToMany(
        () => Clickcount, 
        (clickcount) => clickcount.user)
        clickcount: Clickcount[];

    @OneToMany(
        () =>  MenAdmin, 
        ( menAdmin) =>  menAdmin.user)
        menAdmin:  MenAdmin[];

    @OneToMany(
        () =>  UserFavorites, 
        ( userFavorites) =>  userFavorites.user)
        userFavorites:  UserFavorites[];
    
    @OneToMany(
        () =>  StadistUser, 
        ( stadistUser) =>  stadistUser.user)
        StadistUser:  StadistUser[];
    


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }



}
