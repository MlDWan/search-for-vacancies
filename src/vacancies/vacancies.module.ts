import { Module } from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [VacanciesController],
  providers: [VacanciesService]
})
export class VacanciesModule {}
