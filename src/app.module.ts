import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginSchema } from './appSchema';
import { DbconnectionModule } from './dbconnection/dbconnection.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nest:alfaz@123@cluster0.ylkxn.mongodb.net/kalp-api?retryWrites=true&w=majority')
    ,MongooseModule.forFeature([{name:'Login',schema:LoginSchema}]),
    

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
