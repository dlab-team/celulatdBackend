import {
  Column,
  Entity,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Admin } from "./admin.entity";
import { Favorite } from "./favorites.entity";

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  type: string;

  @ManyToOne(() => Admin, (admin) => admin.resources)
  createdBy: Admin;

  @OneToMany(() => Favorite, (favorite) => favorite.resource)
  favorites: Favorite[];
}
