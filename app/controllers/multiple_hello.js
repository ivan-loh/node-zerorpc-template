'use strict';

var multiple_hello = function multiple_hello(name, reply) {

  console.log('Client Request');

  reply(null, '1. hello ' + name, true);
  reply(null, '2. hello ' + name, true);
  reply(null, '3. hello ' + name, true);
  reply(null, '4. hello ' + name, true);
  reply(null, '5. hello ' + name, true);
  reply(null, '6. hello ' + name, true);
  reply();

};

module.exports = function (context) {
  context.multiple_hello = multiple_hello;
};