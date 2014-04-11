var express = require('express')
  , http = require('http')
  , requirejs = require('requirejs');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3200);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
});

requirejs.config({
  baseUrl : __dirname,
  nodeRequire : require
});

var tmpl = requirejs('./public/templates/tmpl');

var listItems = require('./models/listItems')
  , todos = require('./models/todos');

app.get('/', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl.container(),
    list : tmpl.list({ todos : todos}),
    footer : tmpl.footer()
  }));
});



http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
