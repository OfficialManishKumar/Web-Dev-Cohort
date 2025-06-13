import asyncHandler from "../utils/async-handler.js"
const getNotes = asyncHandler(async (req, res) => {
  console.log("Hello")
});

const getNoteById = asyncHandler(async (req, res) => {
  console.log("Hello")  
});

const createNote = asyncHandler(async (req, res) => {
  const {noteName, }
});

const updateNote = asyncHandler(async (req, res) => {
  console.log("Hello")
});

const deleteNote = asyncHandler(async (req, res) => {
  console.log("Hello")
});


export { createNote, deleteNote, getNoteById, getNotes, updateNote };