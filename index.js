const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Add this
const http = require('http')
const server = http.createServer(app);

app.get('/', (req,res)=> {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        nav {
            background: #555;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: #fff;
            margin: 0 10px;
            text-decoration: none;
        }
        nav a:hover {
            text-decoration: underline;
        }
        section {
            padding: 20px;
            background: #fff;
            margin: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            padding: 10px 20px;
            background: #333;
            color: #fff;
            position: relative;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Server is running</h1>
        </div>
        </body>
        </html>
        `)
    
});

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
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});