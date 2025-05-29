import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GiftTruewalletController } from './gift-truewallet.controller';
import { GiftTruewalletService } from './gift-truewallet.service';

@Module({
  imports: [HttpModule],
  controllers: [GiftTruewalletController],
  providers: [GiftTruewalletService],
  exports: [GiftTruewalletService],
})
export class GiftTruewalletModule {}
