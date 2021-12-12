import express from 'express';
import OSMController from './controller.js';
import {httpHandler} from '../utils/http_handler.js';

export default class OSMRouter {
  static init() {
    const router = new express.Router();
    router.get('/get', httpHandler(OSMController.getGeoJSON));

    return router;
  }
}
