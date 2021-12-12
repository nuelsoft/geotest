import express from 'express';
import OSMRouter from './osm/router.js';
import path from 'path';
const router = new express.Router();

router.use('/osm', OSMRouter.init());

// Client files render
router.get('/', (request, response) => {
  response.sendFile(`${path.join(process.cwd())}/client/view.html`);
});

export default router;
