/*
 * Plugin for hook.io using WebSocket connection
 */
var Hook = require('hook.io').Hook,
    util = require('util'),
    io = require('socket.io-client')

var HookSocket = exports.HookSocket = function(options){
  Hook.call(this, options);
  var self = this;

  self.on('hook::ready', function(){
    var ws = io.connect(options.url);

    ws.on('connect', function(){
      self.emit('websocket::connected');
    });

    ws.on('message', function(msg){
      console.log(msg);
      self.emit('websocket::message',msg);
    });

    ws.on('connect_failed', function(e){
      self.emit('websocket::error', e);
    });

    ws.on('disconnect', function(){
      self.emit('websocket::close');
    });
  });
};

util.inherits(HookSocket, Hook);
