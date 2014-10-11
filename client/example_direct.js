'use strict';

var zerorpc = require("zerorpc"),
    client  = new zerorpc.Client();

client.connect("tcp://127.0.0.1:44444");
client.invoke('hello', 'name', function (err, res, more){
  console.log(err||res);
  if (!more) { console.log('done'); client.close(); }
});