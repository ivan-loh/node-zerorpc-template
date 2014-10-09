var path     = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env      = process.env.NODE_ENV || 'development',
    config   = {
      development: {
        root: rootPath,
        app: { name: 'RPC Server' },
        port: 3000,
        db: 'mongodb://localhost/rpcdb-development',
        bindaddr: 'tcp://0.0.0.0:44444'
      },

      staging: {
        root: rootPath,
        app: { name: 'RPC Server' },
        port: 3000,
        db: 'mongodb://localhost/rpcdb-staging',
        bindaddr: 'tcp://0.0.0.0:44444'
      },

      production: {
        root: rootPath,
        app: { name: 'RPC Server' },
        port: 3000,
        db: 'mongodb://localhost/rpcdb',
        bindaddr: 'tcp://0.0.0.0:44444'
      }

    };


process.env.NODE_ENV = env;
module.exports       = config[env];