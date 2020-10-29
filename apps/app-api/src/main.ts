import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    app.enableShutdownHooks();
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.port || 3000;
    await app.listen(port, () => {
        console.log(
            'Listening at http://localhost:' + port + '/' + globalPrefix,
        );
    });
}
bootstrap();
