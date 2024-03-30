import { Controller, Get } from '@nestjs/common';

@Controller('memory')
export class MemoryController {
  @Get()
  findAll(): string {
    return 'This route returns all memories';
  }
}
