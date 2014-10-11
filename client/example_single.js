'use strict';

var rpc   = require('./rpc'),
    hello = rpc.func('hello');


rpc.connect('tcp://0.0.0.0:44444');

hello('ivan', function (err, res) {

  console.log(err || res);
  rpc.close();

});
