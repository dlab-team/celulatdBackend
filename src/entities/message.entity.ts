import { Admin } from "src/entities/admin.entity";
import { User } from "src/auth/entities/user.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Message {
  [x: string]: any;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  asunt: string;

  @Column("varchar", { length: 100 })
  content: string;

  @Column()
  fecha: Date;

}
