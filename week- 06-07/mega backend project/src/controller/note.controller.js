import { ProjectNote } from "../models/note.model.js";
import asyncHandler from "../utils/async-handler.js"
import {ApiResponse} from "../utils/api-response.js"
import { ApiError } from "../utils/api-error.js";
import { User } from "../models/user.model.js";

const getNotes = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  const notes = await ProjectNote.find({createdBy:userId})
  if(!notes){
    throw new ApiError(400,"No Notes found of the User")
  }
  return res.status(200).json(new ApiResponse(200,notes,"Your Notes"))
});

const getNoteById = asyncHandler(async (req, res) => {
  const {noteId} = req.body;
  const note = await ProjectNote.findById(noteId);
  if(!note){
    throw new ApiError(400,"No Note found of this Id")
  }
  return res.status(200).json(new ApiResponse(200,note,"Got Note successfuly."))
});

const createNote = asyncHandler(async (req, res) => {
  const {projectId} = req.params;
  const {noteContent} = req.body;
  const userId = req.user?.id;
  
  if(!await User.findById(userId)){
    throw new ApiError(400,"Invalid User")
  }
  // Creating Note
  const note = await ProjectNote.create({
    project:projectId,
    createdBy:userId,
    content:noteContent
  })
  if(!note){
    throw new ApiError(400,"Failed to create Note")
  }
  return res.status(200).json(new ApiResponse(200,note,"Note Created Successfuly"))
});

const updateNote = asyncHandler(async (req, res) => {
  const {noteContent} = req.body;
  const {noteId} = req.params;
  const userId = req.user?.id;
  const note = await ProjectNote.findOne({_id:noteId, createdBy:userId})
  note.content = noteContent;
  await note.save()
  return res.status(200).json(new ApiResponse(200,note,"Note Updated Successfuly"))
});

const deleteNote = asyncHandler(async (req, res) => {
  const {noteId} = req.params;
  const note = await ProjectNote.findByIdAndDelete(noteId)
  res.status(200).json(ApiResponse(200,note,"Note Deleted Successfuly"))
});


export { createNote, deleteNote, getNoteById, getNotes, updateNote };