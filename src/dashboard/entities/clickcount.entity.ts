import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : String;

    @Column()
    usuario_id : Number;

    @Column()
    number_click : Number;

}