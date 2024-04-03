import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IMemory } from './Interfaces/memory.interface';
import { Memory } from 'src/Infrastructure/Model/memory.model';

@Injectable()
export class MemoryService {
  constructor(
    @InjectModel(Memory)
    private memoryModel: typeof Memory,
  ) {}

  async findAll(): Promise<Memory[]> {
    return this.memoryModel.findAll();
  }

  async findOne(id: string): Promise<Memory> {
    return this.memoryModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const oldPlace = await this.findOne(id);
    await oldPlace.destroy();
  }

  async create(memory: IMemory) {
    await this.memoryModel.create(memory);
  }
}
