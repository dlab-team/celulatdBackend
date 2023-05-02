import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../auth/entities/user.entity";

@Entity()
export class UserStats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  completedVideos: number;

  @Column({ default: 0 })
  abandonedVideos: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
