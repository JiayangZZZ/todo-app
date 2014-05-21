
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');



function Todo() {
  this.title = "1";
  this.description = "2";
}

util.inherits(Todo, Model);

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
      console.log("ok");
    });
};

/**
 * Extend `Model`
 */

util.inherits(Todo, Model);

module.exports = new Todo();
