const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "6b6t.org", // IP o dirección del servidor
  port: 25565, // puerto del servidor, generalmente es 25565
  username: "YouAreClient123", // nombre del bot
  version: "1.20.1", // versión de Minecraft del servidor
});

bot.on("login", () => {
  console.log("Bot conectado!");
});

bot.once("spawn", () => {
  console.log("Bot ha cargado en el mundo.");

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
        const message = "Mensaje de pruebas.";
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
