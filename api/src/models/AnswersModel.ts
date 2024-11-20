import { Schema, model } from "mongoose";
import { IAnswer } from "../GlobalTypes";


const AnswerSchema = new Schema<IAnswer>({
    questionnaireID:{
        type : Schema.Types.ObjectId,
        ref:"questionnaire",// hacia donde apunta
        required:true
    },
    questionId:{
        type : Schema.Types.ObjectId,
        ref:"questions",// hacia donde apunta
        required:true
    },
    answer:{
        type : String,
        required:true
    }
})

export const AnswerModel = model("answers", AnswerSchema);