import { Module } from '@nestjs/common';
import { CompanySizeService } from './company_size.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanySize } from './models/company_size.model';

@Module({
  imports: [SequelizeModule.forFeature([CompanySize])],
  providers: [CompanySizeService],
})
export class CompanySizeModule {}
