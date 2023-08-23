import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices'
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
        client: {
            clientId: 'user',
            brokers: ['localhost:9092']
        },
        consumer: {
            groupId: 'user-consumer',
            allowAutoTopicCreation: true
        }
    }
  });
  await app
    .listen()
    .then(() => logger.log('user-engine is running'))
    .catch((err) => logger.log(err));
}

bootstrap();
