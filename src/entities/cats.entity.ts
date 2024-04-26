import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column()
    breed: string;

    @Column('int')
    age: number;

    @Column()
    isDeleted: boolean;
}