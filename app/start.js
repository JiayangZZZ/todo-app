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
  , todos = require('./models/todos')
  , todo = require('./models/todo');

// var todos;
// todos.get();
// console.log(todos.list);
// console.log(todos);

app.get('/', function(req, res) {
  todos.get(function(err, list) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header({title : 'YOUR TODOS'}),
        body : tmpl.bodyIndex({ listItems: list })
      }));
    }
    else
      console.log("error!");
  });
});

app.get('/todos/:id', function(req, res) {
  todo.get(req.param('id'), function(err, todo) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header({title : todo.title}),
        body : tmpl.bodyTodo({description : todo.description})
      }));
    }
  });
});

app.get('/create', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header({title : 'CREATE TODO'}),
    body : tmpl.bodyCreate()
  }));
});


http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
