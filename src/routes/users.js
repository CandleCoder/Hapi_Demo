const User = require('./../models/users');
module.exports = [
  {
      method: 'GET',
      path: '/api/users',
      handler: function (request, reply) {
          User.find(function(error, users) {
              if (error) {
                  console.error(error);
              }
              reply(users);
          });
      }
  }
];