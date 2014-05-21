
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');



function Todo() {
  console.log("hsssi");
  this.title = "milk";
  this.description = "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to the baby and can reduce the risk of many diseases in the baby. It also contains many other nutrients.";
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
