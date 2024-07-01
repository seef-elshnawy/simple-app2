import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import * as path from 'path';


async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
  const allOrigin = process.env.origin1?.split(',')
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allOrigin
  });
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          imgSrc: ['self', 'unsplash.com'],
          scriptSrc: ['self'],
          manifestSrc: ['self'],
        },
      },
      crossOriginEmbedderPolicy: false,
    }),
  );

  await app.listen(8000);
}
bootstrap();
