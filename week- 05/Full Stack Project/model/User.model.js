import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Adding hooks in Password to make it encrypt
userSchema.pre("save",async function(next){
  if (this.isModified('password')){
    console.log(`Password before change: ${this.password}`)
    this.password = await bcrypt.hash(this.password,10)
    console.log(`Password after change: ${this.password}`)
  }
  // But now we need to use "next()" keyword to tell that our work is done and now you can save.
  next();
})

const User = mongoose.model("User", userSchema);

export default User;