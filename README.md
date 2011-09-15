## hook.io-ws
Hook listening messages on *WebSocket* client connection.

Based on [Peter Griess](https://github.com/pgriess/node-websocket-client) work. [WebSocket Nodejs Client](https://github.com/pgriess/node-websocket-client)

## Requirements
 - [nodejs](http://nodejs.org)
 - [npm](http://npmjs.org)


## Installation for test with [MtGox](https://mtgox.com)
    git clone git://github.com/cronopio/hook.io-ws.git
    npm install -g ./hook.io-ws

## Installation for My [nodejs](http://nodejs.org) project
    git clone git://github.com/cronopio/hook.io-ws.git
    mkdir MyProject
    cd MyProject
    npm install ../hook.io-ws

## Usage
Run the bin and test the websocket connection against MtGox API

    hookio-websocket

you will see

    Now suscribe to: Trades
    Now suscribe to: MtGox Tick
    Now suscribe to: All Market
    <15:35:39> Remove bid 0.57871186 @ 4.78121
    <15:35:41> Remove bid 1.1169813 @ 4.80201
    <15:35:41> Create bid 1.1169813 @ 4.80201
    <15:35:41> Create bid 0.57871186 @ 4.78121
    <15:35:41> Remove bid 62 @ 4.8211
    <15:35:43> Remove ask 0.27708706 @ 4.89996
    <15:35:43> Create ask 0.27708706 @ 4.89996
    <15:35:43> Create bid 100 @ 4.83
    <15:35:43> Remove bid 100.37427005 @ 4.80001
    <15:35:43> Create bid 25.0864333 @ 4.828
    <15:35:43> Remove bid 25.10203108 @ 4.825
    <15:35:44> Remove bid 0.5 @ 4.79732
    <15:35:48> Create ask 0.5 @ 4.94851
    [0:35:18] Sell 3.0215784 BTC  @  4.83 USD ⇧ 
    <15:35:48> Remove bid 3.0215784 @ 4.83
    <15:35:49> Remove ask 11.63 @ 4.92
    <15:35:50> Remove ask 31.35 @ 4.919
    <15:35:50> Remove ask 4.59 @ 4.9101
    <15:35:51> Remove bid 20.96 @ 4.8221
    <15:35:51> Remove bid 1.1169813 @ 4.80201
    <15:35:51> Create bid 1.1169813 @ 4.80201
    <15:35:51> Create ask 11.63 @ 4.9105
    <15:35:51> Create bid 18.37 @ 4.8221
    <15:35:52> Remove ask 0.0136178 @ 5.39544
    <15:35:52> Remove ask 0.0287266 @ 5.30612
    <15:35:53> Remove ask 0.0292236 @ 5.27132
    <15:35:53> Remove ask 0.0292236 @ 5.25969
    <15:35:53> Remove ask 0.0445312 @ 5.24524
    <15:35:54> Remove ask 0.045227 @ 5.21425
    <15:36:0> Create bid 3.86 @ 4.83
    <15:36:0> Remove ask 0.0143136 @ 5.31943
    ---------------------
       Volume: 72027      
     Buy:4.831 - Sell:4.89995  
     Max:5.69 - Min:4.44   
     Last Price: 4.83    
    ---------------------
    <15:36:2> Remove bid 0.57871186 @ 4.78121