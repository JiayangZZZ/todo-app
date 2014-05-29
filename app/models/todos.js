
// var todos = [{
//   title : 'first todo'
// },{
//   title : 'second todo'
// },{
//   title : 'a;lsfjgla todo'
// }];

var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');

function Todos() {
}

util.inherits(Todos, Model);

Todos.prototype.get = function() {
  request
    .get(this.read().origin + '/todos/?userId=1&accessToken=' + this.read().accessToken )
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.read().clientId,
      clientSecret : this.read().clientSecret
    })
    .end(function(data) {
      console.log(data.body);
    });
};

// var todos = new Todos();
// todos.get();


// module.exports = todos;
