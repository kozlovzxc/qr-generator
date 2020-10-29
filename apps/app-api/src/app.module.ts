import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteEntitiesModule } from './entities/notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [],
            synchronize: true,
        }),
        NoteEntitiesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
