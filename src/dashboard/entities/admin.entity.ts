import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : String;

    @Column()
    correo : String;

    @Column()
    contrasena : String;

    @Column()
    fecha_registro : Date;

    @Column()
    foto : String;

    @Column()
    ultima_conexion : Date;

    @Column()
    tipo : String;

    @Column()
    estado : String;



}