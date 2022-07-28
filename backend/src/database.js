import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/companyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .then((err) => console.log(err));
