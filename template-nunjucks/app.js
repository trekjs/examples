'use strict'

const stringToStream = require('string-to-stream')
const Engine = require('trek-engine')

const nunjucks = require('trek-view-nunjucks')

nunjucks.install(__dirname)

const app = new Engine()

app.use(async ({ res }) => {
  res.send(200, stringToStream(await nunjucks.render('index.html', { name: 'Trek Engine' })))
})

app.run(3000)
