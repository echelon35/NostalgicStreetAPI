import { Controller, Get } from '@nestjs/common';

@Controller('oldplace')
export class OldPlacesController {
  @Get()
  findAll(): string {
    return 'This route returns all old places';
  }
}
