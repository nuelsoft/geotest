import axios from 'axios';

const ExternalRoutes = {
  OSM: 'https://www.openstreetmap.org/api/0.6/map',
};
export {ExternalRoutes};
export default class HTTPService {
  /**
   * HTTP GET
   * @param {string} url
   * @param {{[key: string]: any}} [params]
   * @return {any}
   */
  static async get(url, params) {
    const response = await axios({
      method: 'GET',
      url,
      params,

    });
    return response.data;
  }
}
