const express = require('express');
// const socket = require('socket.io');
const path = require('path');

const app = express();

let public_path = path.join(__dirname, 'public');
let port = process.env.PORT || 3000;

app.use(express.static(public_path));

app.listen(port, function() {
    console.log(`server is running on port ${port}, document root is ${public_path}.`);
});