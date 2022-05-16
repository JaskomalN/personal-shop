const express = require('express');
const res = require('express/lib/response');
const app = express(); 
const router = require("./Views/view");
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
app.use("/items", router);
mongoose.connect("mongodb+srv://main_user:hCotoxmGcuprvFHy@cluster0.egdqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connection"))
.then(() => {app.listen(5000)})
.catch((err) =>console.log(err));