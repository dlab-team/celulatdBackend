import { Clickcount } from "src/entities/countclick.entity";
import { Video } from "src/entities/video.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notification } from "src/entities/notification.entity";

@Entity('users')
export class User {
    [x: string]: any;


    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 50 })
    email: string;
  
    @Column('varchar', { length: 12 })
    phone: string;

    @Column('varchar', { length: 10 })
    password: string;
    
    @Column('varchar', { length: 500 })
    photo: string;

    @OneToMany(() => Video, (video) => video.user)
    video: Video[];

    @OneToMany(() => Notification, (notification) => notification.user)
    notification: Notification[];
    
    @OneToMany(() => Clickcount, (clickcount) => clickcount.user)
    clickcount: Clickcount[];


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }



}
