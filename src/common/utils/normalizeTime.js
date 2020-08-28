const R = require("ramda");
const { format } = require("date-fns/fp");

module.exports = (trackArray) => {
  return trackArray.map((event) => ({
    ...event,
    startTime: R.pipe(format("HH:mm"))(event.startTime),
    endTime: R.pipe(format("HH:mm"))(event.endTime),
  }));
};
