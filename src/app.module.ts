/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/dto/note.module';

@Module({
  imports: [AuthModule, UserModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
