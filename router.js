import express from 'express';
import OSMRouter from './osm/router.js';
const router = new express.Router();

router.use('/osm', OSMRouter.init());

export default router;
