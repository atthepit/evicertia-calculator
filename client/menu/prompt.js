const readline = require("readline");

class Prompt {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  question(text) {
    return new Promise(res => {
      this.rl.question(text, answer => {
        res(answer);
      });
    });
  }

  write(...args) {
    console.log(...args);
  }

  close() {
    this.rl.close();
  }
}

module.exports = Prompt;
