import { Controller, Post } from '@nestjs/common';
import { Connection, EntityManager, QueryRunner } from 'typeorm';

@Controller('e2e')
export class E2eController {
    private queryRunner: QueryRunner;

    constructor(
        private connection: Connection,
        private entityManager: EntityManager,
    ) {
        // @ts-ignore
        this.queryRunner = this.entityManager.queryRunner = this.connection.createQueryRunner(
            'master',
        );
    }

    @Post('transaction/start')
    start() {
        return this.queryRunner.startTransaction();
    }

    @Post('transaction/rollback')
    rollback() {
        return this.queryRunner.rollbackTransaction();
    }
}
