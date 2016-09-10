'use strict'

const path = require('path')

const Engine = require('trek-engine')

const pug = require('trek-view-pug')

const app = new Engine()

app.use(async ({ res }) => {
  res.send(200, await pug.render(path.join(__dirname, './index.pug'), { name: 'Trek Engine' }))
})

app.run(3000)
