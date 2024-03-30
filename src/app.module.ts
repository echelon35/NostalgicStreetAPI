import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Memory } from './Infrastructure/Model/memory.model';
import { MemoryModule } from './Memory/memory.module';
import { User } from './Infrastructure/Model/user.model';
import { Role } from './Infrastructure/Model/role.model';
import { Comment } from './Infrastructure/Model/comment.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: 'nostalgic-street-test.c6bzukkwgr3l.eu-west-3.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'S5X*0wdqT_]fS_[:Nr:5rEDn}ySL',
        database: 'nostalgic-street',
        autoLoadModels: true,
        synchronize: true,
        retryAttempts: 3,
        retryDelay: 10000,
        models: [Memory,User,Role,Comment],
      }),
    }),
    MemoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
