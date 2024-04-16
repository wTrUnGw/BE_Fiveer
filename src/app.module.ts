import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[userModuleTs\]Module } from './[user.module.ts/]/[user.module.ts/].module';
import { \[user\]Module } from './[user/]/[user/].module';
import { UserModule } from './user/user.module';

@Module({
  imports: [\[userModuleTs\]Module, \[user\]Module, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
