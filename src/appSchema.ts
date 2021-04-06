import * as mongoose from 'mongoose';
export const LoginSchema = new mongoose.Schema({
    id : {type : String,required:false},
    username : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true}
},{versionKey:false})


export interface LoginApi extends mongoose.Document{
    id : string;
    username : string;
    email : string;
    password : string;
}