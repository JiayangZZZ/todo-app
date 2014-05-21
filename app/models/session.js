//do authentication part
function Session() {}
//console.log("ok");
Session.prototype.getToken = function() {
  console.log("stupid");
  request
    .post(this.origin + 'oauth2/token')
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.clientId,
      clientSecret : this.clientSecret
    })
    .end(function(data) {
      //return data.accessToken;
      console.log(data);
      this.accessToken = data.accessToken;
    });
};

module.exports = Session;
