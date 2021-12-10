import OSMService from './service.js';
export default class OSMController {
  static async getGeoJSON(request, response) {
    const {a, b, c, d} = request.query;
    const geoJSON = await OSMService.getGeoJSON(a, b, c, d);

    response.status(200).send(geoJSON);
  }
}
