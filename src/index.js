const { platform, router } = require("bottender/router");
const MessengerAction = require("./Messenger");

module.exports = async function App() {
  return router([
    platform("messenger", MessengerAction),
  ]);
};
