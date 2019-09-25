const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log(`Successful connection!`);
    conn.write(`Name: GSA`);

    // testing timeout on move functionality
    // setTimeout(() => {
    //   conn.write(`Move: up`)}, 50);
    

  })

  conn.on('data', (data) => {
    console.log(`Message from server: ${data}`);
  });

  return conn;
}


let exporting = {
  connect
};


module.exports = exporting;