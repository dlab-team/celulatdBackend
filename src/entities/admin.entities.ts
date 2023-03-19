import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}