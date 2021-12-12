import OSMService from '../osm/service.js';

describe('OSM Service:u.test', () => {
  it('should successfully query osm api', async () => {
    const response = await OSMService.getGeoJSON(1, 1, 1, 1);
    expect(response.type).toBeDefined();
    expect(response.features).toBeDefined();
  });
});
