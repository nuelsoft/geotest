import osmtogeojson from 'osmtogeojson';

export default class OSMToGeoJSON {
  static convert(osm) {
    return osmtogeojson(osm);
  }
}
