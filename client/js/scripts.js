const responseBox = document.getElementById('response-box');
const form = document.getElementById('bbox-form');
const button = document.getElementById('submit-button');

const minLon = document.getElementById('min-lon');
const maxLon = document.getElementById('max-lon');
const minLat = document.getElementById('min-lat');
const maxLat = document.getElementById('max-lat');

const state = {
  loading: false,
};

form.onsubmit = async () => {
  if (state.loading) return;

  state.loading = true;
  button.innerText = 'loading...';

  const req = {
    min_lon: minLon.value,
    min_lat: minLat.value,
    max_lon: maxLon.value,
    max_lat: maxLat.value,
  };
  console.log(req);

  fetch(`/osm/get?${toQuery(req)}`).then(async (response) => {
    const json = await response.json();
    if (json.error) throw json.message;

    const parsedArray = transformGeoJSONToArray(json.data);
    if (parsedArray[0].length !== 0) {
      responseBox.innerHTML = transformArrayToTable(parsedArray);
    } else responseBox.innerHTML = emptyDataSetAlert();

    resetState();
  }).catch((e) => {
    resetState();
    responseBox.innerHTML = errorAlert(e);
  });
};

button.onclick = form.onsubmit;

const resetState = () => {
  button.innerText = 'Get GeoData';
  state.loading = false;
};

function errorAlert(err) {
  return `
<div class="alert alert-danger alert-dismissible fade show" role="alert"> 
    ${err}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
}

function emptyDataSetAlert() {
  return `
<div class="alert alert-warning alert-dismissible fade show" role="alert"> 
    Box contains no features, try adjusting your coordinates
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
}
