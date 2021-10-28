const _ = require("lodash");
const dayjs = require("dayjs");

module.exports = function FormatEvents(userEmail, events) {
  const isCreator = (event) => _.get(event, "creator.email") === userEmail;
  const isAttendee = (event) =>
    _.some(
      event.attendees,
      (attendee) => _.get(attendee, "email") === userEmail
    );

  return _.map(
    _.filter(events, (event) => {
      return isCreator(event) || isAttendee(event);
    }),
    (event) => ({
      id: event.id,
      summary: event.summary,
      htmlLink: event.htmlLink,
      start: _.has(event, "start.date")
        ? dayjs(event.start.date).format("YYYY/MM/DD")
        : dayjs(event.start.dateTime).format("YYYY/MM/DD HH:mm"),
      end: _.has(event, "end.date")
        ? dayjs(event.end.date).format("YYYY/MM/DD")
        : dayjs(event.end.dateTime).format("YYYY/MM/DD HH:mm"),
    })
  );
};
