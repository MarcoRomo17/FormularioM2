import { Schema, model } from "mongoose";

//creamos interface, Es como describir al objeto, una descripcion dle mismo

interface IUsers {
    //por buena practica, la I va siamepre
    name:string;
    email:string;
    lastNames:string;
    password:string;
    rol: "administrator" | "client";
}

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