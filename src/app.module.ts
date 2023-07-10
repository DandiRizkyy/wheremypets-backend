/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/dto/note.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, UserModule, NoteModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
