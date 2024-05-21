const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };
  fs.appendFile('users.txt', JSON.stringify(user) + '\n', (err) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
