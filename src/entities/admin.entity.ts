import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resource } from "./resourse.entity";

@Entity("admin")
export class Admin {
  [x: string]: any;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 50 })
  email: string;

  @Column("varchar", { length: 100 })
  password: string;
}
