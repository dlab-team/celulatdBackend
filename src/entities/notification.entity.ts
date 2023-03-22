import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trash } from "./trash.entity";
import { Usr } from "./user.entity";

@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usr, user => user.notification)
  user: Usr;

  @Column()
  message: string;

  @Column()
  read: boolean;

  @Column({ type: 'timestamptz' }) 
  date_send: Date;

  @OneToOne(() => Trash)
  @JoinColumn({ name: 'trash_id' })
  trash: Trash;



}