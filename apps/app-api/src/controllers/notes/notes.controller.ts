import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { NotesService } from '@app-api/src/entities/notes/notes.service';
import { IsString } from 'class-validator';

class PutDTO {
    @IsString() content: string;
}

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Get()
    getAll() {
        return this.notesService.getAll();
    }

    @Put()
    put(@Body() payload: PutDTO) {
        return this.notesService.create(payload);
    }

    @Delete(':id')
    delete(@Param() params: any) {
        return this.notesService.delete({ id: params.id });
    }
}
