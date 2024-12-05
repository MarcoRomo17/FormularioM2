import { Schema, model } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";


const QuestionnaireSchema = new Schema<IQuestionnaires>({
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