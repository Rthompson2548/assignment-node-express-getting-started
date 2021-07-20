// server.js is reponsible for running the app

// set variable PORT to = value found inside of process.env
// or default to 5000
    // PORT defines where the server is running
const { PORT = 5000 } = process.env
// require the express app that was exported
const app = require("./app")
// function that runs when the server starts successfully
const listener = () => console.log(`Success! Listening on Port ${PORT}.`)
// listen() method is what runs the server and takes PORT (#) and 
// and a function as it's arguments. 
app.listen(PORT, listener)