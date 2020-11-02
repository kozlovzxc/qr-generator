import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteEntitiesModule } from './entities/notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NoteEntity } from '@app-api/src/entities/notes/note.entity';
import { NotesModule } from '@app-api/src/controllers/notes/notes.module';
import { E2eModule } from './controllers/e2e/e2e.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '../../.env',
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST'),
                port: configService.get('DATABASE_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                entities: [NoteEntity],
                synchronize: true,
            }),
        }),
        E2eModule,
        NotesModule,
        NoteEntitiesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
