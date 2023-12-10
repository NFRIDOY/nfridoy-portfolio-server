const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const cookieParser = require("cookie-parser"); // npm install cookie-parser

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(cors({
    origin: [ "http://localhost:5173", "http://localhost:5174"],
    // origin: ["https://job-market-x.web.app"],
    credentials: true
}));
app.use(express.json());
// app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send(`nfridoy-portfolio server is running on port ${port}`)
})

app.listen(port, () => {
    console.log(`nfridoy-portfolio server is listening on port ${port} Thank you!`)
})
