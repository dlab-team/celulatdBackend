import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class notifications {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id : number;

    @Column()
    mensaje : string;

    @Column()
    leido : boolean;

    @Column()
    fecha_envio: Date;


}