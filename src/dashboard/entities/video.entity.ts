import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo : string;

    @Column()
    descripcion : string;

    @Column()
    duracion : number;

    @Column()
    fecha_publicacion : Date;

    @Column()
    admin_id : number;

    @Column()
    ruta_archivo : string;

}