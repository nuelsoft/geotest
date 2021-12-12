import OSMService from './service.js';
import {Response, ResponseError} from '../utils/http_types.js';

export default class OSMController {
  static async getGeoJSON(request) {
    const {
      min_lon: minLon,
      min_lat: minLat,
      max_lon: maxLon,
      max_lat: maxLat,
    } = request.query;

    if (![minLon, minLat, maxLon, maxLat]
        .every((entry) => !isNaN(parseInt(entry)))) {
      throw new ResponseError(400,
          'min_lon, min_lat, max_lon, and max_lat are required');
    }

    try {
      const geoJSON = await OSMService.getGeoJSON(
          minLon, minLat, maxLon, maxLat);
      return new Response(200, geoJSON);
    } catch (err) {
      if (err.isAxiosError) {
        throw new ResponseError(400, err.response.data);
      }
      // If there any other errors, it should be treated as a server error
      throw err;
    }
  }
}
