import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
