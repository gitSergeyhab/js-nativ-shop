const SCALE = 13;
const openStreetMapTile = {
  png: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

export const addMap = (data) => {
  const map = L.map('js-map');
  const [lat, lng] = data.coordinates;

  const mainMarker = L.marker({
    lat,
    lng,
  },
    /*{
       icon: mainPinIcon,
     }*/
  );
  mainMarker.addTo(map);
  map.on('load', () => console.log('map-load!!!'))
    .setView({
      lat,
      lng,
    }, SCALE);

  L.tileLayer(
    openStreetMapTile.png, {
      attribution: openStreetMapTile.attribution,
    },
  ).addTo(map);

  mainMarker.addTo(map);

};
