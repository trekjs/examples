'use strict'

const path = require('path')

const Engine = require('trek-engine')

const ejs = require('trek-view-ejs')

const app = new Engine()

app.use(async ({ res }) => {
  res.send(200, await ejs.render(path.join(__dirname, 'index.ejs'), { name: 'Trek Engine' }))
})

app.run(3000)
