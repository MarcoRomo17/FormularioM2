import { Schema, model } from "mongoose";

interface IAnswer  {
    questionnaireID: Schema.Types.ObjectId | string,//decimos que qstOnj es de tipo object ID o de string
    questionId: Schema.Types.ObjectId | string,
    answer: string;
}

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