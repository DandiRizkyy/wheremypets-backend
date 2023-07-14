import { Module } from '@nestjs/common';
import { FoundController } from './found.controller';
import { FoundService } from './found.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FoundController],
  providers: [FoundService],
})
export class FoundModule {}
