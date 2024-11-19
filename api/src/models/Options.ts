import { Schema, model } from "mongoose";

interface IOptions {
    title: string,
    questionID: Schema.Types.ObjectId | string
}

const OptionSchema = new Schema<IOptions>({
    title:{
        type: String,
        required:true
    },
    questionID:{
        type : Schema.Types.ObjectId,
        ref:"questions",// hacia donde apunta
        required:true
    }
})
export const OptionModel = model("options", OptionSchema)