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

  let output = "";
  
  if (input === 'w') {
    output = "Move: up";
  } else if (input === 'a') {
    output = "Move: left";
  } else if (input === 's') {
    output = "Move: down";
  } else if (input === 'd') {
    output = "Move: right";
  } else if (input === 'z') {
    output = "Say: eat my shortssss";
  } else if (input === 'x') {
    output = "Say: hissssss";
  } else if (input === 'c') {
    output = "Say: i'm winning!";
  }
  connection.write(output);
}


const input = {
  setupInput
};

module.exports = input;