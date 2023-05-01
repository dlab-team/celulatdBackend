

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "src/entities/video.entity";
import { MenAdmin } from "src/entities/mensage-administrator";
import { UserFavorites } from "src/entities/user-favorites";
import { StadistUser } from "src/entities/statistics-user";
import { Documents } from "src/documents/entities/document.entity";
import { ViewDocuments } from "src/entities/view-documents";
import { View } from "src/entities/view";

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

    @OneToMany(
        () =>  Documents , 
        ( documents) =>  documents.user)
        documents: Documents [];

    @OneToMany(
        () =>  ViewDocuments, 
        ( viewDocuments) =>  viewDocuments.user)
        viewDocuments: ViewDocuments [];
    
    @OneToMany(
        () =>  View, 
        ( view) =>  view.user)
        view: View [];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }



}
