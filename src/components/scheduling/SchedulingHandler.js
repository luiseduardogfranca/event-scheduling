const {
  format,
  setHours,
  addMinutes,
  startOfDay,
  addHours,
} = require("date-fns/fp");
const { isEqual, isBefore, isAfter } = require("date-fns");

const R = require("ramda");
const normalizeTime = require("../../common/utils/normalizeTime");

const regex = {
  title: /^([A-Za-zÀ-ÖØ-öø-ÿ:?!,.:;()-\s]+[A-Za-zÀ-ÖØ-öø-ÿ:?!,.:;()-])/i,
  duration: /([1-9][0-9]+min)/,
  durationNumber: /([1-9][0-9]+)/,
  textDuration: /(lightning)/,
};

function generateTrack(arrayEvents) {
  let tracks = [];
  let track = [];

  let getHour = (hour) => R.pipe(startOfDay, addHours(hour))(new Date());

  let startTime = getHour(9);
  let breakPoint = getHour(12);

  for (let index = 0; index < arrayEvents.length; ++index) {
    let getEvent = () =>
      addTimeToEvent(startTime, arrayEvents[index], (time, duration) =>
        R.pipe(addMinutes(duration))(time)
      );

    if (arrayEvents[index] != undefined) {
      let newEvent = getEvent();

      // if afternnon
      if (isAfter(newEvent.endTime, breakPoint)) {
        // if create a new track
        if (
          isAfter(newEvent.endTime, breakPoint) &&
          isEqual(breakPoint, getHour(17))
        ) {
          console.log(track.length);

          tracks.push(normalizeTime(track));
          track = [];
          startTime = getHour(9);
          breakPoint = getHour(12);
          newEvent = getEvent();
        } else {
          startTime = getHour(13);
          breakPoint = getHour(17);
          newEvent = getEvent();
        }
      }

      startTime = newEvent.endTime;
      track.push(newEvent);

      if (
        index == arrayEvents.length - 1 &&
        !isAfter(newEvent.endTime, getHour(17))
      ) {
        console.log(track.length);

        tracks.push(normalizeTime(track));
      }
    }
  }
  return tracks;
}

function addTimeToEvent(startTime, eventObj, getEndTime) {
  return {
    ...eventObj,
    startTime: startTime,
    endTime: getEndTime(startTime, eventObj.duration),
  };
}

function createEventFromString(title) {
  let nameMatch = title.match(regex.title);
  let durationMatch = title.match(regex.duration);

  let eventName = nameMatch && nameMatch.length > 0 ? nameMatch[0] : null;
  let eventDuration =
    durationMatch && durationMatch.length > 0
      ? durationMatch[0].match(regex.durationNumber)[0]
      : null;

  if (eventDuration === null) {
    eventDuration = regex.textDuration.test(title) ? 5 : null;
  }

  return { title: eventName, duration: parseInt(eventDuration) };
}

function validateTitleEvent(eventTitle) {
  let testTitle = regex.title.test(eventTitle);
  let testDuration = regex.duration.test(eventTitle);
  let testTextDuration = regex.textDuration.test(eventTitle);

  return (
    testTitle &&
    ((testDuration && !testTextDuration) || (!testDuration && testTextDuration))
  );
}

module.exports = {
  createEventFromString,
  validateTitleEvent,
  addTimeToEvent,
  generateTrack,
};
