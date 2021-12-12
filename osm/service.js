import HTTPService, {ExternalRoutes} from '../utils/http_service.js';
import OSMToGeoJSON from '../utils/osm_to_geo.js';

export default class OSMService {
  static async getGeoJSON(minLon, minLat, maxLon, maxLat) {
    const osm = await HTTPService.get(ExternalRoutes.OSM,
        {bbox: [minLon, minLat, maxLon, maxLat].join(',')});

    return OSMToGeoJSON.convert(osm);
  }
}
