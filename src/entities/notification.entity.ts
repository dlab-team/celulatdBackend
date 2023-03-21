import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trash } from "./trash.entity";
import { User } from "./user.entity";

@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.notification)
  user: User;

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