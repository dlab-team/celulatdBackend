import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Favorite } from "../../entities/favorites.entity";
import { Message } from "../../entities/message.entity";
import { UserStats } from "../../entities/userStadist.entity";

@Entity("users")
export class User {
  [x: string]: any;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 50 })
  email: string;

  @Column("varchar", { length: 100 })
  password: string;


  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
