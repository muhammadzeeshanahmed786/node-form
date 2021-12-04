import mongoose from "mongoose";

// field details
let studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 password:{
     type:Number
 }
});
// collection Name
let Student = mongoose.model("student", studentSchema);

// to use this model in our code
export default Student;
