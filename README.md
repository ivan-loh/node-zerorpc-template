## NODE RPC Server
A simple template of a RPC server that runs on zerorpc with controllers and models.
This is what i use to bind different servers and services from my backend systems with the web application.

## Installation
Installation steps for getting zeromq and zerorpc working, as getting zeromq is more than just a npm install.

#### Ubuntu
```bash
sudo add-apt-repository ppa:chris-lea/zeromq
sudo apt-get update
sudo apt-get install libzmq3-dev
npm install
```

#### Mac
```bash
brew install zeromq
npm install
```

## Sample Client
```javascript
'use strict';

var zerorpc = require("zerorpc");

var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:44444");
    
    client.on("error", function(error) {
      console.error("RPC client error:", error);
    });

    client.invoke('hello', 'ivan', function(error, res, more) {
    
      if(error) {
        console.error(error);
      } else {
        console.log("RESPONSE:", res);
      }
    
      if(!more) {
        console.log("Done.");
        client.close(); // Really ?
      }
    
    });
```

## TODO
* grunt support maybe ?
* routing ?