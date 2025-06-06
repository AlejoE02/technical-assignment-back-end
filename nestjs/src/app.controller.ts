import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getVenues(@Query('limit') limit?: string): Promise<Venue[]> {
    const limitValue = parseInt(limit, 10) || 10; 
    return this.appService.getVenues(limitValue);
  }
}
