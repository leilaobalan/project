const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Add this
const http = require('http')
const server = http.createServer(app);

// app.get('/', (req,res) => {
//     res.send("Server is running")
// });

//connection to MongoDB

// Connect to MongoDB
mongoose
.connect("mongodb+srv://leilaobalan:A94-BrNrGBqn7gd@cluster0.oympg.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if the database connection fails
});

//Middleware
app.use(cors());
app.use(express.json());

//Import API folder
const submitTalentForm = require('./API/submit')

//Use API
app.use("/submit", submitTalentForm)

// Start the server
// const PORT = 1523;

 //app.listen(PORT, () => {
  //  console.log(Server is running on http://localhost:${PORT});
 //});

//Start the server Microsoft Azure
const PORT = 8080;

server.listen(PORT || 8080, () => {
    console.log(`Server running on port ${PORT || 8080}`);
});
