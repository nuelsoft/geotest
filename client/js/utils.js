/**
 * Converts object to query param string
 * @param {{[key: string]: any}} params
 * @return {string}
 */
function toQuery(params) {
  let query = '';
  const keys = Object.keys(params);
  for (const key of keys) {
    query += `${key}=${params[key]}&`;
  }
  return query;
}

/**
 * transforms geoJSON to Array based on feature properties
 * Array can easily to be transformed to csv or any table like format
 * Usecase here: to transform to html table
 * @param {{[key: string]: any, features: Array<{
 *   [key: string]: any,
 *   properties: {[key: string: any]}
 * }>}} geoJSON
 * @return {Array<Array<any | string>>}
 */
function transformGeoJSONToArray(geoJSON) {
  let head = new Set();
  const body = [];
  const features = geoJSON.features;

  for (const feature of features) {
    const keys = Object.keys(feature.properties);
    head = new Set([...head, ...keys]);
  }

  for (const feature of features) {
    const properties = feature.properties;
    const row = [];
    for (const key of head) {
      row.push(properties[key]);
    }
    body.push(row);
  }
  return [[...head], ...body];
}

/**
 * Turns Array of Array to html table based on Bootstrap styles
 * @param {Array<Array<any>>} array
 * @return {string}
 */
function transformArrayToTable(array) {
  let markup = '<table class="table table-responsive table-striped">';

  if (array.length !== 0) {
    // Define thead tag and populate with column titles
    let thead = `<thead><tr>`;
    const head = array[0];
    for (const h of head) {
      thead += `<th scope="col"> ${h} </th>`;
    }
    thead += `</tr></thead>`;
    markup += thead;

    // Define tbody tag iteratively populate each row
    let tbody = `<tbody>`;
    const rows = array.splice(1, array.length);
    for (const row of rows) {
      tbody += `<tr>`;
      for (const cell of row) {
        tbody += `<td> ${cell ?? ''} </td>`;
      }
      tbody += `</tr>`;
    }
    tbody += `</tbody>`;
    markup += tbody;
  }


  markup += '</table>';
  return markup;
}
