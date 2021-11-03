const dataOphalen = () => {
    //fetch om data uit API op te halen
    fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=netherlands&api_key=f2ab12a57fcca396592451123c0c3ba1&format=json")
        .then(response => response.json())
        .then(data => {
            // geef data mee aan de functies
            deleteUnusedData(data);
            changeKey(data);
            stringToInteger(data);
            return data
        }).then(cleanedData => {
            let filteredData = filterDurationZero(cleanedData)
            console.log(filteredData)
        })
}

const deleteUnusedData = data => {
    // gebruik forEach om te loopen over array track. Vervolgens verwijder ik de keys met hun value die ik niet nodig heb
    data.tracks.track.forEach(track => {
        delete track.image;
        delete track.mbid;
        delete track.streamable;
    });
}

const changeKey = data => {
    // met behulp van een forEach verander ik de key van name in de array track naar nameSong
    data.tracks.track.forEach(track => {
        Object.defineProperty(track, 'nameSong', Object.getOwnPropertyDescriptor(track, 'name'));
        delete track.name;
    })
}

const stringToInteger = data => {
    data.tracks.track.forEach(track => {
        // zet string om naar Integer voor listeners en duration
        track.listeners = parseInt(track.listeners);
        track.duration = parseInt(track.duration);
    })
}

const filterDurationZero = data => {
    // verwijder objecten waarvan de duration = 0
    return data.tracks.track.filter(track => {
           return track.duration > 0;
        })
}

dataOphalen();