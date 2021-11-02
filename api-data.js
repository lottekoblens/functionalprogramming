function dataOphalen() {
    //fetch om data uit API op te halen
    fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=netherlands&api_key=f2ab12a57fcca396592451123c0c3ba1&format=json")
        .then(response => response.json())
        .then(data => {
            // geef data mee aan de functies
            EverythingToLowerCase(data)
            deleteUnusedData(data)
            changeKey(data)
            return data
        }).then(cleanedData => {
            // console.log opgeschoonde data
            console.log(cleanedData)
        })
}

function EverythingToLowerCase(data) {
    for (let i = 0; i < data.tracks.track.length; i++) {
        data.tracks.track[i].name = data.tracks.track[i].name.toLowerCase();
    }
}

function deleteUnusedData(data) {
    // gebruik forEach om te loopen over array track. Vervolgens verwijder ik de keys met hun value die ik niet nodig heb
    data.tracks.track.forEach(track => {
        delete track.image;
        delete track.mbid;
        delete track.streamable;
    });
}

function changeKey(data) {
    // met behulp van een forEach verander ik de key van name in de array track naar nameSong
    data.tracks.track.forEach(track => {
       Object.defineProperty(track, 'nameSong', Object.getOwnPropertyDescriptor(track, 'name'));
        delete track.name;
    })
    console.log(data.tracks.track)
}


dataOphalen();