
function Model() {
  this.origin = 'http://localhost:3000';
  this.clientId = 'abc123';
  this.clientSecret = '123abc123456';
  //get token
  this.accessToken = 'd331dac991d3c59d17b8794040b910b80e3baaa4';

  //token
}

Model.prototype.read = function() {
  var model = new Model();
  return({
    'origin' : model.origin,
    'clientId' : model.clientId,
    'clientSecret' : model.clientSecret,
    'accessToken' : model.accessToken
  })
};

module.exports = Model;
