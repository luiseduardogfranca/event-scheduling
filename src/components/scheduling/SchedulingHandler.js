// manage all event: create track, create event, and return
const regex = {
  title: /^([A-Za-zÀ-ÖØ-öø-ÿ:?!,.:;()-\s]+[A-Za-zÀ-ÖØ-öø-ÿ:?!,.:;()-])/i,
  duration: /([1-9][0-9]+min)/,
  durationNumber: /([1-9][0-9]+)/,
  textDuration: /(lightning)/,
};

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

module.exports = { createEventFromString, validateTitleEvent };
