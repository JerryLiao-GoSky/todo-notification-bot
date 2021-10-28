const { getEventsToday } = require("../libs/google-calendar");
const FormatEvents = require("../utils/format-events");
const CalendarTemplate = require("./block-template/calendar");

module.exports = async function HandleTodayEventsCmd(context) {
  const { userName } = context.event.rawEvent;
  const events = await getEventsToday();
  const result = FormatEvents(userName, events);

  await context.chat.postEphemeral(CalendarTemplate(null, result));
};
