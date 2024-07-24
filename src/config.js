module.exports = {
  token: process.env.token || "", // Your bot token
  channelId: process.env.channelId || "", //Channel Id you want to send the message

  webMonitor: true, // Set to false if you don't want to use web-monitor
  expressPort: process.env.expressPort || 3000, // Port for web monitor

  nodes: [
    {
      host: "lavalink.jirayu.net",
      password: "youshallnotpass",
      port: 13592,
      identifier: "Server 1",
      secure: false,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "us1.lavalink.creavite.co",
      password: "auto.creavite.co",
      port: 20080,
      identifier: "Server 2",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "node.raidenbot.xyz",
      password: "pwd",
      port: 5501,
      identifier: "Server 3",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
