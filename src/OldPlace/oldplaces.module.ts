import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OldPlace } from 'src/Infrastructure/Model/oldplace.model';
import { OldPlacesService } from './oldplaces.service';
import { OldPlacesController } from './oldplaces.controller';

@Module({
  imports: [SequelizeModule.forFeature([OldPlace])],
  providers: [OldPlacesService],
  controllers: [OldPlacesController],
})
export class OldPlacesModule {}
