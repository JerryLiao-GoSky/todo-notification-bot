const _ = require("lodash");
const dayjs = require("dayjs");

module.exports = function FormatEvents(user, events) {
  const isCreator = (u, e) => _.includes(_.get(e, "creator.email"), u);
  const isAttendee = (u, e) =>
    _.some(e.attendees, (a) => _.includes(_.get(a, "email"), u));

  return _.map(
    _.filter(events, (originEvent) => {
      return isCreator(user, originEvent) || isAttendee(user, originEvent);
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
