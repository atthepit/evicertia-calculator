const Menu = require("./menu");
const CalculatorAPI = require("./calculator-api");

const menu = new Menu();
const calcAPI = new CalculatorAPI();

menu.setTitle("Welcome to Evicertia Calculator!");

menu.addOption({
  option: 1,
  text: "Add a list of numbers",
  action: [getNumbers, calcAPI.add.bind(calcAPI), menu.write.bind(menu)]
});

menu.addOption({
  option: 2,
  text: "Substract two numbers",
  action: [
    getNumbers,
    nums => calcAPI.substract(...nums),
    menu.write.bind(menu)
  ]
});

menu.addOption({
  option: 3,
  text: "Get the product of a list of numbers",
  action: [getNumbers, calcAPI.multiply.bind(calcAPI), menu.write.bind(menu)]
});

menu.addOption({
  option: 4,
  text: "Divide two numbers",
  action: [
    getNumbers,
    nums => calcAPI.divide(...nums),
    result =>
      menu.write(`Quotient: ${result.Quotient}\nRemainder: ${result.Remainder}`)
  ]
});

menu.addOption({
  option: 5,
  text: "Modify tracking ID",
  action: [
    () => menu.input("Input your Track ID (leave empty to remove): "),
    trackId => calcAPI.setTrackId(trackId),
    () => menu.write("Done!")
  ]
});

menu.addOption({
  option: 6,
  text: "Exit",
  action: [() => menu.write("\nBye!"), process.exit]
});

menu.run();

function getNumbers() {
  return menu.input("Input the numbers separated by spaces: ").then(x =>
    x
      .trim()
      .split(" ")
      .filter(x => x)
      .map(parseFloat)
      .filter(x => !Number.isNaN(x))
  );
}
