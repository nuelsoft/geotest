import App from './app';

const app = new App();

app.start();
process.on('SIGINT', () => {
  app.stop();
});
