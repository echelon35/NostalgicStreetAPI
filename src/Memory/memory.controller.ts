import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemoryService } from './memory.service';
import { createMemoryDto } from './DTO/create-memory.dto';
import { IMemory } from './Interfaces/memory.interface';

@Controller('memory')
export class MemoryController {

  constructor(private _memoryProvider: MemoryService) {}

  @Get()
  async findAll(): Promise<IMemory[]> {
    const memories = await this._memoryProvider.findAll();
    return memories;
  }

  @Post()
  async create(@Body() createMemoryDto: createMemoryDto) {
    await this._memoryProvider.create(createMemoryDto);
  }
}
