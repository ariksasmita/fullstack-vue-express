const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure "/posts" API
const posts = require('./routes/api/post');
// Any URL going to "/api/posts" will be handled by "posts" above
app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(__dirname + '/public/'));

  // Hanlde SPA
  app.get(/.*/, (req, resp) => res.sendFile(__dirname + '/public/index.html'));
}

// "process.env.port" is what node in Heroku / production will use, otherwise in local it will fallback to 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
