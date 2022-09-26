import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get()
  getAllGames() {
    return this.appService.getAllGames();
  }

  @Get()
  getGame(id: string) {
    return this.appService.getGame(id);
  }
}
