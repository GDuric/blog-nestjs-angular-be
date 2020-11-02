import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  subtitle: string;

  @Column('text')
  imageUrl: string;

  @Column('text')
  content: string;
}