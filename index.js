import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import Student from "./models/student/student.js";

let app = express();

app.post("/add-student", async (req, res) => {
  console.log(req.body);
//   let student = new Student({
//     studentName: req.body.studentName,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   let saveData = await student.save();
//   req.json(saveData);
});

mongoose.connect(
  "mongodb+srv://zeeshan:zeeshan ahmed 1234@cluster0.xgzzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit"
);
mongoose.connection.once("open", () => {
  console.log(" mongo Database Connected ");
});
mongoose.connection.on("error", () => {
  console.log("=================== Server not connected ===================");
});
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }))


app.use((req, res, next) => {
  console.log(req.body, "....");
  res.end();
  next();
});
app.listen("5000", () => {
  console.log("server ready");
});
