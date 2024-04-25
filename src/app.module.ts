import { Module } from '@nestjs/common';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CompanyModule } from './company/company.module';
import { WalletModule } from './wallet/wallet.module';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanySizeModule } from './company_size/company_size.module';

@Module({
  imports: [
    VacanciesModule,
    CompanyModule,
    WalletModule,
    UserModule,
    ///вынести в отдельную папку добавить енв
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'leto',
      password: 'password',
      database: 'search-vacancies',
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    CompanySizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
