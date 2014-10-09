'use strict';

var mongoose = require('mongoose'),
    User     = mongoose.model('User');

var hello = function hello(name, reply) {

  console.log('Client Request');

  User
    .findOne({ 'name': name})
    .exec(function (err, doc) {
      if (err) {
        return reply(err);
      }

      if (!doc) {
        reply(null, 'hello stranger');
      } else {
        reply(null, 'hello ' + doc.fullname);
      }
    });

};

module.exports = function (context) {
  context.hello = hello;
};