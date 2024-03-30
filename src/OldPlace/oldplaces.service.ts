import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OldPlace } from 'src/Infrastructure/Model/oldplace.model';

@Injectable()
export class OldPlacesService {
  constructor(
    @InjectModel(OldPlace)
    private oldPlaceModel: typeof OldPlace,
  ) {}

  async findAll(): Promise<OldPlace[]> {
    return this.oldPlaceModel.findAll();
  }

  findOne(id: string): Promise<OldPlace> {
    return this.oldPlaceModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const oldPlace = await this.findOne(id);
    await oldPlace.destroy();
  }
}
