import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'age' })
  age: number;

  constructor(partial: Partial<Person>) {
    Object.assign(this, partial);
  }
}
