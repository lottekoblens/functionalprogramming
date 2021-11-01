function dataOpschonen() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
  
        // functie waarmee de vraag wordt omgezet in alleen een woord 'huisdier'
        function changeQuestionToWord (str) {
          const new_key = 'huisdier';
          const huisdieren = [];
  
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
        //   console.log(huisdieren);
          return huisdieren
        }
        
        function removeEverythingAfterOf (str, newData) {
          // split na of zodat wanneer er hond of hamster is ingevuld, er alleen hond over blijft
          const new_huisdieren = [];
          for (let i = 0; i < newData.length; i++) {
            const split = newData[i].split("of ", 1);
            new_huisdieren.push(split[0]);
          }
          return new_huisdieren
        }
  
        function changeToLowercase(str, newData) {
          // zet alle antwoorden om naar lowercase
          let new_huisdieren_lowercase = [];
          for (let i = 0; i < newData.length; i++) {
            let lowercase = newData[i].toLowerCase();
            new_huisdieren_lowercase.push(lowercase);
          }
          return new_huisdieren_lowercase
        }

        // let removedOf = removeEverythingAfterOf('huisdier');
        let dataWord = changeQuestionToWord('Wat is je favoriete soort huisdier?');
        let removedOf = removeEverythingAfterOf('huisdier', dataWord);
        let lowerCase = changeToLowercase('huisdier', removedOf);
        

        let cleanedData = [];

        for(let i = 0; i < data.length; i++) {

            cleanedData.push({
                huisdier: lowerCase[i]
            })
        }

        console.log(cleanedData);

      })

  }
  
  dataOpschonen();