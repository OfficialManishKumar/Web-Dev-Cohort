import mongoose, { Schema }  from "mongoose";

const projectNoteSchema = new mongoose.Schema({
    project:{
        type: Schema.Types.ObjectId,
        ref:"Project",      // ref = reference
        required:true
    },
    createdBy: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type: String,
        required: true,
    }
},{timestamps: true})       // "timestamps: true" will automatically add the "created_at" and "changed_at" field at mongodb by mongoose

export const ProjectNote = mongoose.model("ProjectNote",projectNoteSchema)