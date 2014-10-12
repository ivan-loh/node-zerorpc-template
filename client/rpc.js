'use strict';

var zerorpc = require("zerorpc"),
    client  = new zerorpc.Client();

module.exports = {

  connect: function (url) { client.connect(url); },
  close: function () { client.close(); },

  func: function (func_name) {

    var name = func_name;

    return function () {

      var limit    = arguments.length - 1,
          done     = arguments[limit],
          new_args = [],
          result   = [],
          index;

      new_args.push(name);
      delete arguments[limit];

      for (index in arguments) {
        if (arguments.hasOwnProperty(index)) {
          new_args.push(arguments[index]);
        }
      }

      new_args.push(function (err, res, more) {
        if (err)   { return done(err);          }
        if (res)   { result.push(res);   }
        if (!more) { done(null, result.length > 1 ? result : result[0]); }
      });

      client.invoke.apply(client, new_args);
    };
  }

};
