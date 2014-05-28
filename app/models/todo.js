
var request = require('superagent')
  , util = require('util')
  , Model = require('./model')
  , Session = require('./session');



function Todo() {
  console.log("Todo constructor=======");
  this.title = "milk";
  this.description = "ok, Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to the baby and can reduce the risk of many diseases in the baby. It also contains many other nutrients.";
}

util.inherits(Todo, Model);

Todo.prototype.get = function() {
  console.log("get prototype function======");
  console.log(this.title + " hohoho");
  request
    .get(this.read().origin + '/todos/11' + '?userId=1&accessToken=' + this.read().accessToken)
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.read().clientId,
      clientSecret : this.read().clientSecret
    })
    .end(function(data) {
      console.log(data.body[0]);
    });
};

/**
 * Extend `Model`
 */

module.exports = new Todo();
