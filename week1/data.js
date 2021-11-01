function dataOpschonen() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {

      // functie waarmee de vraag wordt omgezet in alleen een woord 'huisdier'
      function changeQuestionToWord(str) {
        const new_key = 'huisdier';
        let huisdieren = [];

        for (let i = 0; i < data.length; i++) {
          if (str !== new_key) {
            Object.defineProperty(
              data[i],
              new_key,
              Object.getOwnPropertyDescriptor(data[i], str)
            );
            delete data[i][str];
            huisdieren.push(data[i].huisdier)
          }
        }
        console.log(huisdieren)
        return huisdieren
      }

      // split na of zodat wanneer er hond of hamster is ingevuld, er alleen hond over blijft
      function removeEverythingAfterOf(str, newData) {
        let new_huisdieren = newData.map(function (dier) {
          let legeArray = [];
          let split = dier.split("of ", 1);
          // legeArray.push(split[0]);
          // console.log(legeArray);
        })
        console.log(new_huisdieren);
        // let new_huisdieren = [];
        // for (let i = 0; i < newData.length; i++) {
        //   let split = newData[i].split("of ", 1);
        //   new_huisdieren.push(split[0]);
        // }
        // return new_huisdieren
      }

      // zet alle antwoorden om naar lowercase
      function changeToLowercase(str, newData) {
        let new_huisdieren_lowercase = newData.map(function (dier) {
          let lowercase = dier.toLowerCase();
          return lowercase;
        })
        console.log(new_huisdieren_lowercase);
        // let new_huisdieren_lowercase = [];
        // for (let i = 0; i < newData.length; i++) {
        //   let lowercase = newData[i].toLowerCase();
        //   new_huisdieren_lowercase.push(lowercase);
        // }
        // return new_huisdieren_lowercase
      }

      let dataWord = changeQuestionToWord('Wat is je favoriete soort huisdier?');
      let removedOf = removeEverythingAfterOf('huisdier', dataWord);
      let lowerCase = changeToLowercase('huisdier', removedOf);

      let cleanedData = [];

      for (let i = 0; i < data.length; i++) {
        cleanedData.push({
          huisdier: lowerCase[i]
        })
      }

      console.table(cleanedData);

    })

}

dataOpschonen();