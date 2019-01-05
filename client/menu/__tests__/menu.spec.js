const Menu = require("../menu");

describe("Menu", () => {
  it("add some options", () => {
    const menu = new Menu();

    const option1 = {
      option: 1,
      text: "Option 1",
      action: () => 1
    };
    menu.addOption(option1);

    const option2 = {
      option: 2,
      text: "Option 2",
      action: [() => 2, () => 3]
    };
    menu.addOption(option2);

    expect(menu.options).toContain(option1);
    expect(menu.options).toContain(option2);
  });

  it("should perfom an option action", () => {
    const menu = new Menu();

    const option1 = {
      option: 1,
      text: "Option 1",
      action: () => 1
    };
    menu.addOption(option1);

    expect.assertions(1);
    menu.performActions(1).then(result => expect(result).toBe(1));
  });

  it("should perfom multiple chained actions", () => {
    const menu = new Menu();

    const option1 = {
      option: 1,
      text: "Option 1",
      action: [() => 1, x => [x, 2]]
    };
    menu.addOption(option1);

    expect.assertions(1);
    menu.performActions(1).then(result => expect(result).toBe([1, 2]));
  });

  it("should display options text", () => {
    const menu = new Menu();

    const option1 = {
      option: 1,
      text: "Option 1",
      action: [() => 1, x => [x, 2]]
    };
    menu.addOption(option1);

    const option2 = {
      option: 2,
      text: "Option 2",
      action: [() => 2, () => 3]
    };
    menu.addOption(option2);

    const expected = "1) Option 1\n  2) Option 2";
    const result = menu.displayOptions();
    expect(result).toBe(expected);
  });

  it("should display a title", () => {
    const prompt = { write: jest.fn() };
    const menu = new Menu(prompt);

    const title = "This is the title";
    menu.setTitle(title);
    menu.showTitle();
    expect(prompt.write).toHaveBeenCalledWith(title);
  });
});
