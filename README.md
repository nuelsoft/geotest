# geotest πΊπ
> Exploring use of the open street maps api to display features
> of an enclosed geo box (bounding box)

## Usage π·
### Install dependencies β¬οΈ
```bash
yarn install
```

### Test π§ͺ
```bash
yarn test
```

### Start π
This solution features a http server, which must be run on a port.
Specify your preferred port by running as follows
```bash
PORT=<PORT> yarn start
```
> When port is not set, application resolves to 9000.

Client application is can be accessed at `http://<your_host>:<your_port ?? 9000>/`
Ex: `http://localhost:9000/`. See screenshots of usage below.

#### Shots πΈ
> Successful Usage
![success](.shots/success.png)

> Usage with errors
![success](.shots/error.png)

## Api π₯
The solution also exposes an API interface

### Get OSM GeoJSON
- Endpoint: `/osm/get`
- Method: `GET`
- Query Params: `min_lon`, `min_lat`, `max_lon`, `max_lat`
