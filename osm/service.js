import HTTPService, {ExternalRoutes} from '../utils/http_service.js';
import OSMToGeoJSON from '../utils/osm_to_geo.js';

export default class OSMService {
  static async getGeoJSON(a, b, c, d) {
    const osm = await HTTPService.get(ExternalRoutes.OSM,
        {bbox: `${a},${b},${c},${d}`});

    return OSMToGeoJSON.convert(osm);
  }
}
