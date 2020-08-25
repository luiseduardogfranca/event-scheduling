const SchedulingHandler = require("./SchedulingHandler");

describe("Test scheduling methods", () => {
  it("getNameAndDuration should spliting in title, and return the name and duration", (done) => {
    // console.log(SchedulingHandler());
    let res = SchedulingHandler.getNameAndDuration("title");
    expect(res).toEqual("title");
    done();
  });
});
