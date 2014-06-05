
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');

function Todo() {
}

util.inherits(Todo, Model);

Todo.prototype.get = function(todoId, callback) {
  request
    .get(this.read().origin + '/todos/' + todoId + '?userId=1&accessToken=' + this.read().accessToken)
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.read().clientId,
      clientSecret : this.read().clientSecret
    })
    .end(function(error, data) {
      callback(error, data.body[0]);
    });
};

/**
 * Extend `Model`
 */

module.exports = new Todo();
