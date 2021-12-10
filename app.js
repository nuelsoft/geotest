import http from 'http';
import express from 'express';
import util from 'util';


class App {
  constructor() {
    this.log = util.debuglog(this.constructor.name);
    this.express = express();

    this.server = http.createServer(this.express);
    this.log('.constructor, ready!');
  }

  get port() {
    return process.env.PORT ?? 9000;
  }

  start() {
    this.server.listen(this.port);
    this.log('.start, fired up app at', this.port, '🍷');
  }

  stop() {
    this.server.close();
    this.log('.stop, terminated app');
  }
}


const app = new App();
app.start();
process.on('SIGINT', () => {
  app.stop();
});
