import asyncHandler from "../utils/async-handler.js"
const getNotes = asyncHandler(async (req, res) => {
  // Hello
});

const getNoteById = asyncHandler(async (req, res) => {
  // Hello
});

const createNote = asyncHandler(async (req, res) => {
  const {projectId} = req.param;
  const {createdBy} = req.body
});

const updateNote = asyncHandler(async (req, res) => {
  // Hello
});

const deleteNote = asyncHandler(async (req, res) => {
  // Hello
});


export { createNote, deleteNote, getNoteById, getNotes, updateNote };