'use strict';


var glob    = require('glob'),
    zerorpc = require('zerorpc');


module.exports = function (config) {

  // Setup Controllers
  var context = {},
      controllers = glob.sync(config.root + '/app/controllers/*.js');
      controllers.forEach(function (controller) { require(controller)(context); });


  // RPC Server Boot Up
  console.log(context);
  var server = new zerorpc.Server(context);
      server.bind(config.bindaddr);
      server.on('error', function (err){
        console.error("RPC Server error:", err);
      });

};