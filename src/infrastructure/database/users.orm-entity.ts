import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'id', unsigned: true })
  id: number;

  @Column({ type: 'varchar', name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name' })
  lastName: string;

  @Column({ type: 'int', name: 'age', unsigned: true })
  age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
