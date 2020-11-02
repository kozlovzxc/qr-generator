import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NoteEntitiesModule } from '@app-api/src/entities/notes/notes.module';

@Module({
    imports: [NoteEntitiesModule],
    controllers: [NotesController],
})
export class NotesModule {}
