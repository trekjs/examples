'use strict'

const path = require('path')

const Engine = require('trek-engine')

const pug = require('trek-view-pug')

const app = new Engine()

app.use(({ res }) => {
  pug.render(path.join(__dirname, './index.pug'), { name: 'Trek Engine' })
    .then(html => res.send(200, html))
})

app.run(3000)
