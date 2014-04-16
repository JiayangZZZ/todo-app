
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');



function Todo() {
  this.title;
  this.description;
}

Todo.prototype.get = function() {
  request
    .get(this.origin + '/todos/:id' + this.accessToken)
    // .send({
    //   username : 'jiayang',
    //   password : 'password',
    //   clientId : this.clientId,
    //   clientSecret : this.clientSecret
    // })
    // .success(function(data) {
    //   console.log(data);
    .end(function(res) {
      console.log(res);
    });
};

/**
 * Extend `Model`
 */

util.inherits(Todo, Model);
util.inherits(Todo, Session);


//GLOBAL.todo = new Todo();
GLOBAL.todo = new Todo();
console.log(todo);

module.exports = todo;
