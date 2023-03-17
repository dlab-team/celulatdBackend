
import { Usuario } from "src/modules/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Clickcount {
  
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;

 @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  number_click: number;



}