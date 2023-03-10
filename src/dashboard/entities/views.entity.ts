import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id : number;

    @Column()
    video_id : number;

    @Column()
    fecha_vista : Date;



}