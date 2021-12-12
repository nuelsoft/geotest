import request from 'supertest';
import App from '../app';

const app = new App();

describe('OSM:e2e.test', () => {
  it('should successfully make a request', async () => {
    const response = await request(app.express)
        .get('/osm/get?min_lon=1&min_lat=1&max_lon=1&max_lat=1');
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.error).toEqual(false);
  });

  it('should fon incomplete params', async () => {
    const response = await request(app.express)
        .get('/osm/get');
    expect(response.status).toEqual(400);
    expect(response.body.message).toBeDefined();
    expect(response.body.error).toEqual(true);
  });
});
