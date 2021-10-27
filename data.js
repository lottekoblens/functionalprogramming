function dataOpschonen() {
  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);

      // console.log(json[2]['Wat is je favoriete windrichting?']);

      function huisdierKort(zin) {
        const new_key = 'huisdier';
        const huisdieren = [];

        for (let i = 0; i < json.length; i++) {
          if (zin !== new_key) {
            Object.defineProperty(
              json[i],
              new_key,
              Object.getOwnPropertyDescriptor(json[i], zin)
            );
            delete json[i][zin];
            huisdieren.push(json[i].huisdier)
          }
        }
        console.log(huisdieren);
      }
      huisdierKort('Wat is je favoriete soort huisdier?');
    })
}

dataOpschonen();