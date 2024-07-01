import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot([
    {
      name: 'short',
      ttl: 1000,
      limit: 2
    },
    {
      name:"medium",
      ttl: 10000,
      limit: 20
    },
    {
      name: "long",
      ttl: 60000,
      limit: 90
    }
  ])
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }
  ],
})
export class AppModule {}
