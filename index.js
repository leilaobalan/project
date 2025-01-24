const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Status</title>
        <style>
            body {
                background-color: #D6B3E4; /* pastel purple */
                font-family: Arial, sans-serif;
                color: #3F2A59; /* dark purple text */
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
            }

            .container {
                background-color: #F2E1F4; /* lighter pastel purple */
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                width: 300px;
            }

            h1 {
                font-size: 2em;
                margin-bottom: 20px;
                color: #5C3C70;
            }

            p {
                font-size: 1.2em;
                margin: 0;
                color: #6F4F83;
            }

            .status {
                margin-top: 20px;
                font-size: 1.5em;
                font-weight: bold;
                color: #3F2A59;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Server Status</h1>
            <p class="status">Server is running smoothly 🎊 </p>
        </div>
    </body>
    </html>
    `);  // Used backticks for multi-line string
});

// Connection to MongoDB
mongoose
    .connect("mongodb+srv://leilaobalan:A94-BrNrGBqn7gd@cluster0.oympg.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); 
    });

// Middleware
app.use(cors());
app.use(express.json());

// Import API folder
const submitTalentForm = require('./API/submit'); 

// Use API
app.use("/submit", submitTalentForm);

// Start the server
const PORT = 5004;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
});
