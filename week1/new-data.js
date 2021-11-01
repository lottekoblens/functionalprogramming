function dataOphalen() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            EvertythingToLowerCase(data)
            removeEverythingAfterOf(data);
        

            return data
        }).then(cleanedData => {
            console.log(cleanedData)
        })
}

function EvertythingToLowerCase(data) {
    for (let i = 0; i < data.length; i++) {
        data[i]['Wat is je favoriete soort huisdier?'] = data[i]['Wat is je favoriete soort huisdier?'].toLowerCase();
    }
}

function removeEverythingAfterOf (data) {
    for (let i = 0; i < data.length; i++) {
        data[i]['Wat is je favoriete soort huisdier?'] = data[i]['Wat is je favoriete soort huisdier?'].split("of ", 1).toString();
    }
}

dataOphalen();