const path = require('path')

const Engine = require('trek-engine')

const marko = require('trek-view-marko')

marko.install()

const app = new Engine()

app.use(({ res }) => {
  res.send(200, marko.render(path.join(__dirname, './index.marko'), { name: 'Trek Engine' }))
})

app.run(3000)
