import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Landing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : String;

    @Column()
    usuario_id : number;

    @Column()
    number_click: number;


    // @Column({default: false})
    // completed: boolean;


}