import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './note.entity';
import { Repository } from 'typeorm';

type CreateDTO = Pick<NoteEntity, 'content'>;
type DeleteDTO = Pick<NoteEntity, 'id'>;

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(NoteEntity)
        private repository: Repository<NoteEntity>,
    ) {}

    getAll() {
        return this.repository.find();
    }

    create(payload: CreateDTO) {
        return this.repository.save(payload);
    }

    delete(payload: DeleteDTO) {
        return this.repository.delete(payload.id);
    }
}
