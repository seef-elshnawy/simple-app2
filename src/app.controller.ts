import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()  
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('greething/get')
  getGreething(): string {
    return this.appService.getHello();
  }

  @Post('greething/send')
  sendGreething(
    @Body('greet') greet: string,
    @Body('userId') userId: number,
  ): string {
    return this.appService.sendGreething(greet, userId);
  }
  
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('signUp')
   signUp(@Body('email') email: string, @Body('name') name: string) {
    return this.appService.signUp(name, email);
  }

  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Get('find/users')
  findAllUsers() {
    return this.appService.findAllUsers();
  }

  @Get('find/user/:id')
  findOneUser(@Param('id') id: number) {
    return this.appService.findOneUser(id);
  }
}
