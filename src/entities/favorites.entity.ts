import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../auth/entities/user.entity";
import { Resource } from "./resourse.entity";

@Entity()
export class Favorite {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamptz", nullable: true })
  timestamp: Date;

  @ManyToOne(() => User, (user) => user.favorites)
  user: User;

  @ManyToOne(() => Resource, (resource) => resource.favorites)
  resource: Resource;
}
