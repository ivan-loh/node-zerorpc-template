'use strict';

var rpc     = require('./rpc'),
    m_hello = rpc.func('multiple_hello');


rpc.connect('tcp://0.0.0.0:44444');

m_hello('ivan', function (err, res) {

  console.log(err || res);
  rpc.close();

});
