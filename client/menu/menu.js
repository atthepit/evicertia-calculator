const Prompt = require("./prompt");

class Menu {
  constructor(prompt = new Prompt()) {
    this.prompt = prompt;
    this.title = "";
    this.options = [];
  }

  setTitle(title) {
    this.title = title;
  }

  showTitle() {
    if (this.title) {
      this.prompt.write(this.title);
    }
  }

  addOption(option) {
    this.options.push(option);
  }

  displayOptions() {
    return this.options
      .map(action => `${action.option}) ${action.text}`)
      .join("\n  ");
  }

  input(text) {
    return this.prompt.question(text).catch(() => this.prompt.close());
  }

  write(...args) {
    this.prompt.write(...args);
  }

  performActions(optionNumber) {
    const option = this.options.find(opt => opt.option == optionNumber);
    if (!option) {
      this.prompt.write(`Invalid option: ${optionNumber}`);
      return Promise.resolve();
    }

    if (typeof option.action === "function") {
      return Promise.resolve(option.action());
    }

    if (Array.isArray(option.action)) {
      // Execute all actions in a Promise chain
      return option.action
        .reduce((result, action) => result.then(action), Promise.resolve())
        .catch(option.error || console.error);
    }
  }

  showMenu() {
    return this.input(`
Please, select an option:
  ${this.displayOptions()}
What do you want to do? `);
  }

  loop() {
    return this.showMenu()
      .then(option => this.performActions(option))
      .then(() => this.loop());
  }

  run() {
    this.showTitle();
    return this.loop();
  }
}

module.exports = Menu;
