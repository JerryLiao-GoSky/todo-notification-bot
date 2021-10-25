module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendGenericTemplate([
      {
        title: "Welcome to Peter's Hats",
        imageUrl: "https://picsum.photos/300/200",
        subtitle: "We've got the right hat for everyone.",
        defaultAction: {
          type: "web_url",
          url: "https://yahoo.com/",
          webviewHeightRatio: "tall",
        },
        buttons: [
          {
            type: "web_url",
            title: "Google",
            url: "https://google.com/",
            messengerExtensions: true,
            webviewHeightRatio: "tall",
            fallbackUrl: "https://google.com/",
          },
        ],
      },
    ]);
  }
};
