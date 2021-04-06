import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDTO } from './appDTO';


@Controller('login')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('insert')
  async Insert(@Body() appdto : AppDTO){
    const insertion = this.appService.insertData(appdto);
    return await insertion;
  }

  @Get('view')
  async view(){
    const data = await this.appService.viewdata();
    return data;
  }


  @Patch('update/:id')
  async updateUser(@Param('id') id : string,@Body() appdto:AppDTO){
    // const update_data = this.appService.updateData(id,appdto);
    // return await update_data;
  }

  
}
