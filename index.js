const express = require('express')

require('dotenv').config()

const app = express()




app.get('/home', (req,res) => {
    return res.send('HomeScreen')
})

app.get('/login', (req,res) => {
    return res.send('Login Screen')
})

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
})


console.log ("Hello World");
