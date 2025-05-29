import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GiftTruewalletService } from './gift-truewallet.service';

@Controller('gift-truewallet')
export class GiftTruewalletController {
  constructor(private readonly giftTruewalletService: GiftTruewalletService) {}

  @Get('verify/:code')
  async verifyVoucher(
    @Param('code') code: string,
    @Query('mobile') mobile: string,
  ) {
    return this.giftTruewalletService.verifyVoucher(code, mobile);
  }

  @Post('redeem')
  async redeemVoucher(@Body() body: { code: string; mobile: string }) {
    const { code, mobile } = body;
    return this.giftTruewalletService.redeemVoucher(code, mobile);
  }
}
