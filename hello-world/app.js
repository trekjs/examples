const Engine = require('trek-engine')

const app = new Engine()

app.use(({ res }) => {
  res.end('Hello world')
})

app.run(3000)
