const express = require('express')
const server = express()
server.use(express.json())

const adminRoute = require('./route/admin.js')

server.use('/admin', adminRoute)

server.listen(3000, () => {
  console.log(`Listening`);
})