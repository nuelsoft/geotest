import express from 'express';
import OSMController from './controller.js';

export default class OSMRouter {
  static init() {
    const router = new express.Router();
    router.get('/get', OSMController.getGeoJSON );

    return router;
  }
}
