const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "test.localhost.me", // IP o dirección del servidor
  port: 25565, // puerto del servidor, generalmente es 25565
  username: "YouNickName", // nombre del bot
  version: "1.20.1", // versión de Minecraft del servidor
});

bot.on("login", () => {
  console.log("Bot conectado!");
});

bot.once("spawn", () => {
  console.log("Bot ha cargado en el mundo.");

  // Ejecutar comandos al conectarse
  const commands = [
	'/login 123456asd'
  ];

  commands.forEach((command, index) => {
    setTimeout(() => {
      bot.chat(command);
      console.log(`Ejecutado comando: ${command}`);
    }, index * 2000); // 2000 milisegundos (2 segundos) de diferencia entre comandos
  });

  // Hace que el bot camine hacia adelante
  bot.setControlState("forward", true);

  // Después de 10 segundos, detiene al bot y envía el mensaje a todos los jugadores
  setTimeout(() => {
    bot.setControlState("forward", false);
    console.log("Bot ha dejado de caminar.");

    const players = Object.keys(bot.players);

    // Envía el comando /msg a cada jugador conectado con un cooldown de 3 segundos
    let delay = 0;
    players.forEach((player) => {
      if (player !== bot.username) {
        const message =
          "New dupe with the Item Frame available at 3b3t.lat";
        setTimeout(() => {
          bot.chat(`${player} ${message}`);
          console.log(`Enviado mensaje a ${player}: ${message}`);
        }, delay);
        delay += 6000; // 3000 milisegundos (3 segundos)
      }
    });
  }, 10000); // 10 segundos
});

bot.on("chat", (username, message) => {
  if (username === bot.username) return;
  console.log(`<${username}> ${message}`);
});

bot.on("error", (err) => {
  console.error("Error al conectar:", err);
});

bot.on("end", () => {
  console.log("Desconectado del servidor.");
});
