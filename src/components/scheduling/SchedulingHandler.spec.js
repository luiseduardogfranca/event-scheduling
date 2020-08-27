const SchedulingHandler = require("./SchedulingHandler");

describe("Test handler methods to scheduling events", () => {
  it("getNameAndDuration should spliting in title, and return the name and duration", (done) => {
    // console.log(SchedulingHandler());
    let res = SchedulingHandler.createEventFromString("API with JS 30min");
    expect(res).toMatchObject({ title: "API with JS", duration: 30 });
    done();
  });

  it("validateTitleEvent should validate that string contains a title and a duration and return true if is correct", (done) => {
    let res = SchedulingHandler.validateTitleEvent("API with JS 30min");
    expect(res).toEqual(true);
    done();
  });

  it("validateTitleEvent should validate that string contains a title and a duration and return true if is correct", (done) => {
    let res = SchedulingHandler.validateTitleEvent("API with JS lightning");
    expect(res).toEqual(true);
    done();
  });

  it("validateTitleEvent should validate that string contains a title and a duration and return true if it is not correct", (done) => {
    let res = SchedulingHandler.validateTitleEvent("20API with JS 30min");
    expect(res).toEqual(false);
    done();
  });

  it("validateTitleEvent should validate that string contains a title and a duration and return false if it is not correct", (done) => {
    let res = SchedulingHandler.validateTitleEvent("API with JS");
    expect(res).toEqual(false);
    done();
  });

  it("validateTitleEvent should validate that string contains a title and a duration and return false if it is not correct", (done) => {
    let res = SchedulingHandler.validateTitleEvent("API with JS 20");
    expect(res).toEqual(false);
    done();
  });
});
