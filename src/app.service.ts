import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppDTO } from './appDTO';
import { LoginApi } from './appSchema';

@Injectable()
export class AppService {

  constructor(@InjectModel('Login') private readonly loginobj: Model<LoginApi>) { }
 
  async insertData(appdto: AppDTO) {
  
    if(appdto.id == null){
      return await new this.loginobj(appdto).save()
    }
    else{
     const  data = await this.getSingleUser(appdto.id);
      console.log(data);
      // return await this.loginobj.replaceOne(appdto)
      // return await data = appdto;
      let yes =  data.update(appdto); 
      return yes;
      // data.username = appdto.username;
      // data.email = appdto.email;
      // data.password = appdto.password;
      // data.save()
      // data = appdto;
  }
    // const data = new this.loginobj(appdto);
    // return await data.save();
  }

  async viewdata() {
    return await this.loginobj.find().exec()
  }

  async getSingleUser(id: string) {
    const user = await this.loginobj.findById(id);
    return user;

  }

  // async updateData(id: string, appdto: AppDTO) {
  //   const updated_data = await this.getSingleUser(id);
  //   if(appdto.id){
  //     updated_data.id = appdto.id;
  //   }

  //   if (appdto.username) {
  //     updated_data.username = appdto.username;

  
  //   }
  //   if (appdto.email) {
  //     updated_data.email = appdto.email;
  //   }
  //   if (appdto.password) {
  //     updated_data.password = appdto.password;
  //   }

  //   return updated_data.save();

  // }
}
