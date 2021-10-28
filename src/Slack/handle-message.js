module.exports = async function HandleMessage(context) {
  if (context.event.isText) {
    await context.chat.postEphemeral({
      text: `received the text message: ${context.event.text}`,
    });
  }
};
