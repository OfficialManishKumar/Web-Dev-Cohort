import dotenv from "dotenv"
dotenv.config("C:/Users/hp/Web Dev Cohort/week- 06/mega backend project/.env")
import express from "express"


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({
    storage:storage,
    limits:{
        fileSize:1*1000*1000        // = 1MB
    }
})