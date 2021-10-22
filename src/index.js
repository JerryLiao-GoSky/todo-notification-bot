module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendButtonTemplate("What do you want to do next?", [
      {
        type: "web_url",
        url: "https://google.com",
        webview_height_ratio: "compact",
        title: "Google",
      },
      {
        type: "web_url",
        url: "https://yahoo.com",
        webview_height_ratio: "compact",
        title: "Yahoo",
      },
    ]);
  }
};
