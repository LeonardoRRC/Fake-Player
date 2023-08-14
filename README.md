# Fake-Player

**Fake-Player** es un bot diseñado para Minecraft que emula la presencia de un jugador real dentro del servidor. Posee la capacidad de caminar, enviar mensajes y llevar a cabo diversas acciones en el juego de manera autónoma.

## 🛠️ Instalación

1. Clona el repositorio o descarga directamente los archivos.
2. Verifica que tengas [Node.js](https://nodejs.org/) instalado en tu máquina.
3. Abre una terminal y dirígete al directorio donde se encuentra el proyecto.

## 🚀 Uso

1. Abre el archivo `index.js` con tu editor de texto preferido.
2. Modifica los valores de `host`, `port`, `username` y `version` en la configuración del bot para que se alinee con la información de tu servidor de Minecraft.
3. Personaliza o añade los comandos que quieras que el bot ejecute durante el evento `spawn`.

```javascript
const bot = mineflayer.createBot({
  host: 'tu.servidor.de.minecraft',
  port: 25565,
  username: 'nombreDelBot',
  version: '1.20.1'
});

bot.once('spawn', () => {
  console.log('El bot ha ingresado al mundo.');

  const commands = [
    '/say ¡Hola a todos!',
    '/time set day',
    '/weather clear'
  ];
});
```

4. En la terminal, estando en el directorio del proyecto, instala las dependencias con:
```bash
npm i
npm install mineflayer
```

5. Inicia el bot ejecutando:
```bash
node index.js
```

Una vez hecho esto, el bot se conectará al servidor, ejecutará los comandos predefinidos y comunicará mensajes a los jugadores en línea.

## 🤝 Contribuciones

¡Tu colaboración es bienvenida! Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Realiza y prueba tus cambios.
3. Crea un pull request para que podamos revisar y fusionar tus mejoras.
