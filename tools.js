const data = {
  // Lib settings.
  settings: {
    debug: false, // Enable developer debug mode. (boolean)
    noJokes: false // Disable features for faster testing. (boolean)
  },
  // Console color codes.
  colors: {
    text: [
      '\x1b[30m',
      '\x1b[31m',
      '\x1b[32m',
      '\x1b[33m',
      '\x1b[34m',
      '\x1b[35m',
      '\x1b[36m',
      '\x1b[37m'
    ],
    background: [
      '\x1b[40m',
      '\x1b[41m',
      '\x1b[42m',
      '\x1b[43m',
      '\x1b[44m',
      '\x1b[45m',
      '\x1b[46m',
      '\x1b[47m'
    ]
  },
  // Function: Gets mode(s) data.
  modes(inputList, mode, color, inputString) {
    let setColor = '\x1b[0m', setInput = inputList;
    switch (mode) {
      // hold values if mode is 0. Default mode.
      case 0:
        break;
      // If mode 1; Set txt colors
      case 1:
        setColor = `\x1b[1m%s${this.colors.text[color]}`;
        break;
      // If mode 2; Set background colors.
      case 2:
        setColor = `\x1b[1m%s${this.colors.background[color]}`;
        break;
      // If mode -1 (default); set value to inputted message (no list, but string)
      case -1:
        setInput = inputString;
        break;
      // If mode -2 (debug); set value to inputted message (no list, but string) and set orange color.
      case -2:
        setInput = 'DEBUG: ' + inputList;
        setColor = '\x1b[33m';
        break;
      // If not matched (error); set value to inputted message (no list, but string) and set red color.
      default:
        setColor = '\x1b[31m';
        break;
    }
    // Return usable data.
    return {
      input: setInput,
      color: setColor
    };
  }
};

function Tools() {
  // Tools settings.
  this.settings = data.settings;


  // Debugger function.
  this.debugger = (message) => {
    // If debugger mode enabled start logging
    if (this.settings.debug) {
      // Add the message, debug mode and origin debugger.
      this.log(message, -2, 'debugger');
    }
  };


  // In & Output system:
  // Create an empty string to add items to.
  this.output = '';
  // Function to safely add items to the output without adding empty lines.
  this.input = (input) => { // Adds items to the string.
    // Return output   - add to existing     - if empty string, return value, else add line.
    return this.output += this.output === '' ? input : `\n${input}`;
  };


  // A special logger made to be loved.
  this.log = (input, mode = 0, origin = '') => {
    // console.log(this.output);
    if (origin !== 'debugger') {
      this.debugger(`Logger called by: ${origin}`);
    }

    // Define a new list made up from the inputted text.
    let inputList = input.split('\n');

    // Define default color value
    let color = 0;
    // Loop thru the input and add it to a final console log message
    for (let i of inputList) {
      const modes = data.modes(i, mode, color, input);
      // Check the mode and give the right parameters to the message and color content.
      // Log messages
      console.log(modes.color, modes.input);
      // Go to next color.
      color = color < (data.colors.text.length - 1) ? ++color : 0;
    }
    // Reset after competed.
    output = '';
  };
}


module.exports = new Tools();