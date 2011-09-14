/*
 * Plugin for hook.io using WebSocket connection
 */
var Hook = require('hook.io').Hook,
    util = require('util'),
    WebSocket = require('./websocket').WebSocket;

var HookSocket = exports.HookSocket = function(options){
  Hook.call(this, options);
  var self = this;

  self.on('hook::ready', function(){
    console.log('Iniciando');
   console.log(options);
    var ws = new WebSocket(options.url);

    ws.on('open', function(){
      self.emit('websocket::connected');
    });

    ws.on('message', function(msg){
      self.emit('websocket::message',msg);
    });

    ws.on('wserror', function(e){
      self.emit('websocket::error', e);
    });
    
    ws.on('close', function(){
      self.emit('websocket::close');
    });
  });
};

util.inherits(HookSocket, Hook);
