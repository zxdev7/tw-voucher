import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftTruewalletModule } from './gift-truewallet/gift-truewallet.module';

@Module({
  imports: [GiftTruewalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
