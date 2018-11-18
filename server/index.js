const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure "/posts" API
const posts = require("./routes/api/post");
app.use("/api/posts", posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));