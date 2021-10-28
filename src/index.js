const { platform, router } = require("bottender/router");
const MessengerAction = require("./Messenger");
const SlackAction = require("./Slack");

module.exports = async function App() {
  return router([
    platform("messenger", MessengerAction),
    platform("slack", SlackAction),
  ]);
};
