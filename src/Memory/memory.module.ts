import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Memory } from 'src/Infrastructure/Model/memory.model';
import { MemoryService } from './memory.service';
import { MemoryController } from './memory.controller';

@Module({
  imports: [SequelizeModule.forFeature([Memory])],
  providers: [MemoryService],
  controllers: [MemoryController],
})
export class MemoryModule {}
