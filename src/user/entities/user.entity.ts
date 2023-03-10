import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    contrasena: string;

    @Column()
    fecha_registro: Date;

    @Column()
    foto: string;

    @Column()
    telefono: string;
}