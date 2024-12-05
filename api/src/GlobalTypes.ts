import { Schema } from "mongoose";

export interface IUsers {
    //por buena practica, la I va siamepre
    name:string;
    email:string;
    lastNames:string;
    password:string;
    rol: "administrator" | "client";
}

export interface IAnswer  {
    questionnaireID: Schema.Types.ObjectId | string,//decimos que qstOnj es de tipo object ID o de string
    questionId: Schema.Types.ObjectId | string,
    answer: string;
}

export interface IOptions {
    title: string,
    questionID: Schema.Types.ObjectId | string
}

export interface IQuestionnaires  {
    title: string;
    description: string;
    userID: Schema.Types.ObjectId | string
}

export interface IQuestion{
    title: string,
    type: "radio"| "checkbox"| "seclect"|"text";
    isMandatory: boolean,
    questionnaireID: Schema.Types.ObjectId|string

};