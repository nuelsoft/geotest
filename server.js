import App from './src/app.js';

const app = new App();

app.start();
process.on('SIGINT', () => {
  app.stop();
});
