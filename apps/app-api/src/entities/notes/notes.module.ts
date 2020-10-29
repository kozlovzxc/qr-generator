import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NoteEntity} from "./note.entity";

@Module({
    imports: [TypeOrmModule.forFeature([NoteEntity])],
    providers: [NotesService],
    exports: [NotesService],
})
export class NoteEntitiesModule {}
