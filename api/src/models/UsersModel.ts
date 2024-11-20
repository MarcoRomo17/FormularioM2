import { Schema, model } from "mongoose";
import { IUsers } from "../GlobalTypes";

//creamos interface, Es como describir al objeto, una descripcion dle mismo



const UserSchema = new Schema<IUsers>({
    name:{
        type:String,
        required: true
    },
    lastNames:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    rol:{
        type:String,
        enum:["administrator","client"], //propiedad que espera un arreglo con los valores que son admitidosores
        default:'client'
    }



});

export const UserModel = model("users",UserSchema);