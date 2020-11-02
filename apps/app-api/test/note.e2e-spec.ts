import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (note)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    beforeEach(async () => {
        return request(app.getHttpServer())
            .post('/e2e/transaction/start')
            .expect(201);
    });

    afterEach(async () => {
        return request(app.getHttpServer())
            .post('/e2e/transaction/rollback')
            .expect(201);
    });

    it('GET /notes', () => {
        return request(app.getHttpServer())
            .get('/notes')
            .expect(200)
            .expect([]);
    });

    it('PUT /notes', () => {
        return request(app.getHttpServer())
            .put('/notes')
            .send({ content: 'tmp content' })
            .expect(200);
    });
});
