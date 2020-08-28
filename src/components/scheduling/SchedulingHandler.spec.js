const SchedulingHandler = require("./SchedulingHandler");
const R = require("ramda");
const { addHours, isEqual, startOfDay, addMinutes } = require("date-fns/fp");

describe("Test handler methods to scheduling events", () => {
  it("createEventFromString should spliting in title, and return the name and duration", (done) => {
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

  it("addTimeToEvent should add the start and end time to the event", (done) => {
    let getHour = (hour) => R.pipe(startOfDay, addHours(hour))(new Date());
    let addTime = (startTime, duration) =>
      R.pipe(addMinutes(duration))(startTime);
    let event = { title: "API with JS", duration: 20 };

    let res = SchedulingHandler.addTimeToEvent(getHour(9), event, addTime);

    expect(res).toMatchObject({
      title: "API with JS",
      duration: 20,
      startTime: getHour(9),
      endTime: addTime(getHour(9), 20),
    });
    done();
  });

  it("generateTrack should return a array all tracks", (done) => {
    let events = [
      { title: "event", duration: 60 },
      { title: "event", duration: 20 },
      { title: "event", duration: 20 },
      { title: "event", duration: 20 },
      { title: "event", duration: 20 },
      { title: "event", duration: 60 },
      { title: "event", duration: 40 },
      { title: "event", duration: 40 },
      { title: "event", duration: 50 },
      { title: "event", duration: 15 },
    ];

    let res = SchedulingHandler.generateTrack(events);

    expect(res).not.toBeUndefined();
    expect(res.length).not.toBeUndefined();
    expect(res.length > 0).toBeTruthy();

    done();
  });
});
