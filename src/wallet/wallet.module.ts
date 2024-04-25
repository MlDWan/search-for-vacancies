import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
