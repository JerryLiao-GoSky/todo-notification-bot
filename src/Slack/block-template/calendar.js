const _ = require("lodash");

module.exports = CalendarTemplate = (name, events = []) => {
  const sectionElement = (event) => ({
    type: "section",
    text: {
      type: "mrkdwn",
      text: `><${event.htmlLink}|*${event.summary}*>\n>${event.start} - ${event.end}`,
    },
  });

  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${name ? `${name} ` : ""}今日共有 ${events.length} 個活動：`,
      },
    },
    ..._.map(events, (event) => sectionElement(event)),
  ];

  return { blocks };
  //   return {
  //   blocks: [
  //     {
  //       type: "section",
  //       text: { type: "mrkdwn", text: `${name ? `${name} ` : ''}今日共有 ${events.length} 個活動：` },
  //     },
  //     {
  //       type: "section",
  //       text: {
  //         type: "mrkdwn",
  //         text: "><https://www.google.com/calendar/|*summary*>\n>Start - End",
  //       },
  //     },
  //     {
  //       type: "section",
  //       text: {
  //         type: "mrkdwn",
  //         text: "><https://www.google.com/calendar/|*summary*>\n>Start - End",
  //       },
  //     },
  //     {
  //       type: "section",
  //       text: {
  //         type: "mrkdwn",
  //         text: "><https://www.google.com/calendar/|*summary*>\n>Start - End",
  //       },
  //     },
  //   ],
  //   };
};
