var Trek = require('trek');

var app = new Trek(__dirname);

app.get('/', function* (next) {
  this.body = 'star trek';
});

app.on('error', function (err, context) {
  app.logger.error(err);
});

app.run(3000);