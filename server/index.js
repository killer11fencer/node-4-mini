require('dotenv').config()
const session = require('express-session')
const express = require('express')
const app = express()
const messageCtrl = require('./messagesCtrl')
const {SERVER_PORT,SECRET_SESSION} = process.env

app.use(session({secret: SECRET_SESSION,
resave: false,
saveUninitialized: false}))

app.use(express.json())
app.get('/api/messages/histoty',messageCtrl.history)
app.get('/api/messages',messageCtrl.getAllMessages)
app.post('/api/messages',messageCtrl.createMessage)


app.listen(SERVER_PORT,()=>console.log('Listening to Port', SERVER_PORT))