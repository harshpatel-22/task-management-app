import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import uuid from 'uuid'
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isCompleted: boolean;
}
