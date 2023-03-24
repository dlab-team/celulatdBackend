import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;
  
  @Column()
  foto: string;
}