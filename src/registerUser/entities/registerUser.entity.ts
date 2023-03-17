import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
   nombre: string;
   @Column()
   correo: string;

   @Column()
   contrasena: string;
   @Column()
   foto: string;
   @Column()
   fecha_registro: string;
  

    // @Column({default: false})
    // completed: boolean;


}