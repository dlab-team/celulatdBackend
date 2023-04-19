import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trash } from "./trash.entity";
import { User } from "src/auth/entities/user.entity";


@Entity()
export class Notification {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  message: string;

  @Column()
  read: boolean;
  
  @ManyToOne(() => User, user => user.notification)
  user: User;

  @OneToOne(() => Trash)
  @JoinColumn({ name: 'trash' })
  trash: Trash;

  @Column({ type: 'timestamptz', nullable: true })
  date_send: Date;
}