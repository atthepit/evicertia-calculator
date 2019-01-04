const Journal = require("../journal");

describe("Journal middleware", () => {
  it("should do nothing if no tracking header is present", () => {
    const journal = {
      add: jest.fn()
    };
    const req = { get: jest.fn() };
    const res = {};
    const next = jest.fn();

    Journal(journal)(req, res, next);
    expect(req.get).toHaveBeenCalledWith("X-Evi-Tracking-Id");
    expect(next).toHaveBeenCalled();
    expect(next.mock.calls[0].length).toBe(0);
    expect(journal.add).not.toHaveBeenCalled();
  });

  it("should add operation to the journal if trackind header is present", () => {
    const journal = {
      add: jest.fn(() => Promise.resolve())
    };
    const trackId = 1;
    const req = {
      get: jest.fn(() => trackId),
      path: "/add",
      body: { Addends: [1, 2] }
    };
    const result = { result: 1 };
    const res = { locals: { result } };
    const next = jest.fn();

    Journal(journal)(req, res, next);
    expect(req.get).toHaveBeenCalledWith("X-Evi-Tracking-Id");
    expect(journal.add).toHaveBeenCalledWith(
      trackId,
      req.path,
      req.body,
      result
    );
  });
});
