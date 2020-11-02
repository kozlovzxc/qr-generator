import { Module } from '@nestjs/common';
import { E2eController } from './e2e.controller';

@Module({
  controllers: [E2eController]
})
export class E2eModule {}
