import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @Column({ type: 'timestamptz', nullable: true })
  date_send: Date;
}