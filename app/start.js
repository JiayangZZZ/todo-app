var express = require('express')
  , http = require('http')
  , request = require('request')
  , requirejs = require('requirejs');

var app = express();


app.configure(function() {
  app.set('port', process.env.PORT || 3200);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
  app.use(express.bodyParser());
});

requirejs.config({
  baseUrl : __dirname,
  nodeRequire : require
});

var tmpl = requirejs('./public/templates/tmpl');

var listItems = require('./models/listItems')
  , todos = require('./models/todos')
  , todo = require('./models/todo');

app.get('/', function(req, res) {
  todos.get(function(err, list) {
    if(!err) {
      // console.log(list);
      res.send(tmpl.html({
        header : tmpl.header({title : 'YOUR TODOS'}),
        body : tmpl.bodyIndex({ listItems: list })
      }));
    }
    else
      res.send(tmpl.html({
        header : tmpl.header({title : 'YOUR TODOS'}),
        body : tmpl.bodyIndex({ listItems: "no todo" })
      }));
  });
});

app.get('/todos/:id', function(req, res) {
  todo.get(req.param('id'), function(err, todo) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header({title : todo.title}),
        body : tmpl.bodyTodo({
          description : todo.description,
          id : todo.id,
          accessToken : 'd331dac991d3c59d17b8794040b910b80e3baaa4'
        })
      }));
    }
  });
});

app.get('/create', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header({title : 'CREATE TODO'}),
    body : tmpl.bodyCreate({accessToken : todo.read().accessToken})
  }));
  console.log(todo.read().accessToken);
}); //res.redirect()

app.post('/todos', function(req, res) {
  request
    .post('http://zhangjiayang.dev.p1staff.com:3000/todos')
    .form({
      title : req.body.title,
      description : req.body.description,
      accessToken : req.body.accessToken,
      userId : '1'
    })
  res.send(tmpl.html({
    header : tmpl.header({title : req.body.title}),
    body : tmpl.bodyTodo({description : req.body.description})
  }));
})

app.del('/todos', function(req, res) {
  console.log(req.body.id);
  console.log(req.body.accessToken);
  request
    .del('http://zhangjiayang.dev.p1staff.com:3000/todos/' + req.body.id)
    .form({
      userId : '1',
      accessToken : req.body.accessToken
    })
})

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
