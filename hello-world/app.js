'use strict'

const Engine = require('trek-engine')

const app = new Engine()

app.use(({ res }) => {
  res.send(200, 'Hello world')
})

app.run(3000)
