import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id : Number;

    @Column()
    video_id : String;

    @Column()
    fecha_agregado : Date;

}