function dataOphalen() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            changeQuestionToWord(data)
            changeKey(data);
        

            return data
        }).then(cleanedData => {
            console.log(cleanedData)
        })
}

function changeQuestionToWord(data) {
    for (let i = 0; i < data.length; i++) {
        data[i]['Wat is je favoriete soort huisdier?'] = data[i]['Wat is je favoriete soort huisdier?'].toLowerCase();
        console.log(data[i]['Wat is je favoriete soort huisdier?'])
    }
}

function changeKey(data) {
    console.log(data)
}

dataOphalen();