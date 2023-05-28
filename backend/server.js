const express = require("express");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const noteRoutes = require("./routes/noteRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares.js");


const app = express();
dotenv.config();
connectDB(); 

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is running..");
});


app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 6000;

app.listen(5000,console.log(`Server started on PORT ${PORT}`));
