const R = require("ramda");
const { format } = require("date-fns/fp");

module.exports = (trackArray) => {
  return trackArray.map((event) => ({
    ...event,
    startTime:
      event.startTime != null ? R.pipe(format("HH:mm"))(event.startTime) : null,
    endTime: event.endTime ? R.pipe(format("HH:mm"))(event.endTime) : null,
  }));
};
