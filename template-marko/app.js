'use strict'

const Engine = require('trek-engine')

const marko = require('trek-view-marko')

marko.install(__dirname)

const app = new Engine()

app.use(({ res }) => {
  res.send(200, marko.render('index.marko', { name: 'Trek Engine' }))
})

app.run(3000)
