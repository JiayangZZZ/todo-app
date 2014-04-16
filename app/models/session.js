//do authentication part
function Session() {}

Session.prototype.getToken = function() {
  request
    .post(this.origin + 'oauth2/token')
    .send({
      username : 'jiayang',
      password : 'password',
      clientId : this.clientId,
      clientSecret : this.clientSecret
    })
    .success(function(data) {
      //return data.accessToken;
      console.log(data);
      this.accessToken = data.accessToken;
    });
};

module.exports = Session;
