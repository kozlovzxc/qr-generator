import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
