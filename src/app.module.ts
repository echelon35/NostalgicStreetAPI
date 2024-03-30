import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { OldPlace } from './Infrastructure/Model/oldplace.model';
import { OldPlacesModule } from './OldPlace/oldplaces.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'nostalgic-street-test.c6bzukkwgr3l.eu-west-3.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'S5X*0wdqT_]fS_[:Nr:5rEDn}ySL',
      database: 'nostalgic-street',
      models: [OldPlace],
    }),
    OldPlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
