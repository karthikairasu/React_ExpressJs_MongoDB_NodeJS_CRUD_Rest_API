import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello From Express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

//---MongoDB Connection---//
// mongoose.connect('mongodb+srv://admin:12345@karthikairasuk.x8sulmb.mongodb.net/esignage?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connect('mongodb://127.0.0.1:27017/Test')
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((error) => {
    console.log(error)
});

app.listen(port, () => console.log(`Server is Listening on port:http://localhost:${port}`));