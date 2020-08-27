// manage all event: create track, create event, and return

function createEventFromString(title) {
  let regexTitle = /^([a-z\s]+[a-z])/i;
  let regexDuration = /([1-9][0-9]+min)/;
  let regexDurationNumber = /([1-9][0-9]+)/;

  let nameMatch = title.match(regexTitle);
  let durationMatch = title.match(regexDuration);

  let eventName = nameMatch && nameMatch.length > 0 ? nameMatch[0] : null;
  let eventDuration =
    durationMatch && durationMatch.length > 0
      ? durationMatch[0].match(regexDurationNumber)[0]
      : null;

  return { title: eventName, duration: parseInt(eventDuration) };
}

function validateTitleEvent(eventTitle) {
  let regexTitle = /^([a-z\s]+)/i;
  let regexDuration = /([1-9][0-9]+min)/;
  let regexTextDuration = /(lightning)/;

  let testTitle = regexTitle.test(eventTitle);
  let testDuration = regexDuration.test(eventTitle);
  let testTextDuration = regexTextDuration.test(eventTitle);

  return (
    testTitle &&
    ((testDuration && !testTextDuration) || (!testDuration && testTextDuration))
  );
}

module.exports = { createEventFromString, validateTitleEvent };
