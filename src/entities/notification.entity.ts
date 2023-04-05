import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trash } from "./trash.entity";
import { Usr } from "./user.entity";


@Entity()
export class Notification {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  message: string;

  @Column()
  read: boolean;
  
  @ManyToOne(() => Usr, user => user.notification)
  user: Usr;

  @OneToOne(() => Trash)
  @JoinColumn({ name: 'trash' })
  trash: Trash;

  @Column({ type: 'timestamptz', nullable: true })
  date_send: Date;
}