import http from 'http';
import express from 'express';
import util from 'util';
import router from './router.js';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

export default class App {
  constructor() {
    this.log = util.debuglog(this.constructor.name);
    this.express = express();
    this.express.use(morgan('combined'));
    this.express.use(cors());
    this.express.use(express.static(`${path.join(process.cwd())}/client`));
    this.express.use(router);

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

