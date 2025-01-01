const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const http = require('http');
const connectToMongo = require('./db');
const app = express();


app.set('view engine','ejs')
app.use(express.static('public'))

const PORT = process.env.PORT || 8181;


=======
const connectToMongo = require('./server/db');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;


>>>>>>> 783977b1226129bbefb5dd26bc2356ac2d41943b
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
<<<<<<< HEAD
app.use('/api/auth', require('./routes/auth'));

=======
app.use('/api/auth', require('./server/routes/auth'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
>>>>>>> 783977b1226129bbefb5dd26bc2356ac2d41943b
app.get('/', (req, res) => {
    res.send('Hello World!');
});

<<<<<<< HEAD


  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
=======
  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
>>>>>>> 783977b1226129bbefb5dd26bc2356ac2d41943b
