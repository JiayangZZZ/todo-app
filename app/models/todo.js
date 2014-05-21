
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');



function Todo() {
  console.log("hsssi");
  this.title = "1";
  this.description = "3";
}

util.inherits(Todo, Model);

Todo.prototype.get = function() {
  console.log("hi");
  request
    .get(this.origin + '/todos/:id' + this.accessToken)
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.clientId,
      clientSecret : this.clientSecret
    })
    // .success(function(data) {
    //   console.log(data);
    .end(function(data) {
      console.log(data);
      console.log("ok");
    });
  console.log("nonono");
};

/**
 * Extend `Model`
 */

util.inherits(Todo, Model);

module.exports = new Todo();
