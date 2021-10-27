function dataOpschonen() {
  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);

      // functie waarmee de vraag wordt omgezet in alleen een woord 'huisdier'
      function huisdierSchoon(zin) {
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
        console.log(huisdieren[0]);

        // split zodat wanneer er hond of hamster is ingevuld, er alleen hond over blijft
        const new_huisdieren = [];
        for (let i = 0; i < json.length; i++) {
          const split = huisdieren[i].split(" ", 1);
          new_huisdieren.push(split[0]);
        }
        console.log(new_huisdieren);

        // zet alle antwoorden om naar lowercase
        const new_huisdieren_lowercase = [];
        for (let i = 0; i < json.length; i++) {
          const lowercase = new_huisdieren[i].toLowerCase();
          new_huisdieren_lowercase.push(lowercase);
        }
        console.log(new_huisdieren_lowercase);

      }
      huisdierSchoon('Wat is je favoriete soort huisdier?');
    })
}

dataOpschonen();