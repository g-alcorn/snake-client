let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
}

const handleUserInput = function(input) {  
  if (input === '\u0003') {
    process.exit();
  } 
  
  if (input === 'w') {
    input = "Move: up";
  } else if (input === 'a') {
    input = "Move: left";
  } else if (input === 's') {
    input = "Move: down";
  } else if (input === 'd') {
    input = "Move: right";
  }
  
  connection.write(input);
}


const input = {
  setupInput
};

module.exports = input;