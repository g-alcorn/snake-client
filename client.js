const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log(`Successful connection!`);
    conn.write(`Name: GSA`);
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