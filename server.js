const express = require("express");
const path = require('path');

//initializing express app
const app = express();
const PORT = 3001;

const og1DMembers = [
    'Harry',
    'Liam',
    'Louis',
    'Niall',
    'Zayn'
];

// creating a route
app.get('/api/drama', (req, res) => {
  res.send("Have you heard the tea????☕️✨");
});

//route that recieves the letter from the url
app.get('/api/words/:letter', (req, res) => {
  const { letter } = req.params;
  res.send(`The letter you entered in your url is: ${letter}`);
});

//route that sends info to browser
app.get('/api/onedirection', (req,res) => {
    res.status(200).json(og1DMembers)
});

app.get('/onedirection', (req,res) => {
    console.log('📑 /onedirection route HIT!')
    res.sendFile(path.join(__dirname, '/onedirection.html'));
})

//starting server at a specific port
app.listen(PORT, () => {
  console.log("Server slaying on http://localhost:3001 📟");
});
