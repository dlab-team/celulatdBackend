import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClickCounter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  instagram_clicks: number;

  @Column()
  facebook_clicks: number;

  @Column()
  twitter_clicks: number;
}
