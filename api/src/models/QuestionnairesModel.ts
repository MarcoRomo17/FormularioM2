import { Schema, model } from "mongoose";

interface IQuestionnaire  {
    title: string;
    description: string;
    userID: Schema.Types.ObjectId | string

}

const QuestionnaireSchema = new Schema<IQuestionnaire>({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    userID:{
        type : Schema.Types.ObjectId,
        ref:"users",// hacia donde apunta
        required:true
    }
})

export const QuestionnaireModel = model("questionnaires", QuestionnaireSchema)